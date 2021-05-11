package cs.miu.edu.models;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Quiz {

    private List<Question> questions=new ArrayList<>();
    private int currentQuestion = -1;
    private int score = 0;
    private int numCorrect = 0;
    private int currentQuestionIndex = 0;
//    private int totalQuestions=0;

    public void getQuestionFromDB(){
        questions.add(new Question("1","3, 1, 4, 1, 5","9"));
        questions.add(new Question("2","1, 1, 2, 3, 5","8"));
//        questions.add(new Question("3","1, 4, 9, 16, 25","36"));
//        questions.add(new Question("4","2, 3, 5, 7, 11","13"));
//        questions.add(new Question("5","1, 2, 4, 8, 16","32"));
    }
    public Question getNextQuestion() {
        if (currentQuestion > questions.size() - 1) {
            return null;
        }
        return questions.get(++currentQuestion);
    }

    public void checkAnswer(String answer) {
        if (currentQuestion < 0 || currentQuestion > questions.size() - 1) {
            return;
        }
        if (questions.get(currentQuestion).getAnswer().equals(answer)) {
            score++;
        }
    }

    public boolean hasNextQuestion() {
        return currentQuestion < questions.size() - 1;
    }

    public int getScore() {
        return score;
    }

    public int getTotalQuestions() {
//        totalQuestions=questions.size();
        return questions.size();
    }

//    public void setTotalQuestions(int totalQuestions) {
//        this.totalQuestions = totalQuestions;
//    }

    public void preventResubmit() {
        currentQuestion = questions.size() + 1;
    }

    public Question getCurrentQuestion(){
        return questions.get(currentQuestionIndex);
    }

    public int getNumCorrect() {
        return this.numCorrect;
    }

    public void scoreAnswer() {
        currentQuestionIndex++;
        numCorrect++;
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getCurrentQuestionIndex() {
        return this.currentQuestionIndex;
    }

    public List<Question> getQuestions() {
        return this.questions;
    }
}
