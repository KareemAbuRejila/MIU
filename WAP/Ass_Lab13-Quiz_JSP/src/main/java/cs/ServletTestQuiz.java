package cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/")
public class ServletTestQuiz extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();

        if (req.getParameter("reset") != null && !req.getParameter("reset").isEmpty()) {
            session.removeAttribute("quiz");
        }
        Object sessionAttribute = session.getAttribute("quiz");
        resp.setContentType("text/html");
        Quiz quiz = null;
        if (sessionAttribute == null) {
            quiz = new Quiz();
        } else {
            String answer = req.getParameter("answer");
            quiz = (Quiz) sessionAttribute;
            quiz.checkAnswer(answer);
        }
        session.setAttribute("quiz", quiz);
        PrintWriter out = resp.getWriter();
        if (quiz.hasNextQuestion()) {
            out.print(getNextQuestion(quiz));
        } else {
            out.print(getResult(quiz));
            quiz.preventResubmit();
        }
    }
    private String getNextQuestion(Quiz quiz) {
        StringBuilder sb = new StringBuilder("<form method=''><h1>The Number Quiz</h1>");
        sb.append("<p> Your score is " + quiz.getScore() + ".</p>");
        sb.append("<p> Guess the next number in the sequence.</p>");
        sb.append(quiz.getNextQuestion());
        sb.append("<p> Your answer: <input type='text' name='answer' /></p>");
        sb.append("<p><input type='submit' value='Submit' /></form>");
        return sb.toString();
    }

    private String getResult(Quiz quiz) {
        StringBuilder sb = new StringBuilder();
        sb.append("<h1>The Number Quiz</h1>");
        sb.append("<p>Your score is " + quiz.getScore() + "</p>");
        sb.append("<p>You have completed the Number Quiz, with a score of " + quiz.getScore() + " out of " + quiz.totalQuestion() + ".</p>");
        sb.append("<form method=''><input type='submit' name='reset' value='Do Quiz Again' /></form>");
        return sb.toString();
    }
}

