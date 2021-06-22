package edu.miu.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/cal")
public class Cal extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out=resp.getWriter();
        out.println("<html><body>");
        out.println("<h1>Hello World</h1>");
        out.println("<form action=\"cal\" method=\"post\">");
        out.println("<label>First Number: <input type=\"text\"  name=\"fNumberP\" ></label>");
        out.println("<p>+</p>");
        out.println("<label>Second Number: <input type=\"text\"  name=\"sNumberP\" ></label>");
        out.println("<br>");

        out.println("<label>First Number: <input type=\"text\"  name=\"fNumberM\" ></label>");
        out.println("<p>*</p>");
        out.println("<label>Second Number: <input type=\"text\"  name=\"sNumberM\" ></label>");
        out.println("<br>");
        out.println("<input style=\"align-self: center\" type = \"submit\">");
        out.println("</form>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (req.getParameter("fNumberP")!=null){
            if (req.getParameter("fNumberP")!=null&&req.getParameter("sNumberP")!=null){
                int fNumberp=Integer.parseInt(req.getParameter("fNumberP"));
                int sNumberp=Integer.parseInt(req.getParameter("sNumberP"));
                int sum=fNumberp+sNumberp;
                System.out.println(sum);
            }
            if (req.getParameter("fNumberP")!=null&&req.getParameter("sNumberP")!=null) {
                int fNumberm=Integer.parseInt(req.getParameter("fNumberM"));
                int sNumberm=Integer.parseInt(req.getParameter("sNumberM"));
                double multi=fNumberm*sNumberm;
                System.out.println(multi);
            }


            PrintWriter out=resp.getWriter();
            out.println("<html><body>");
            out.println("<h1>Result</h1>");
            out.println("<p>"+fNumberp+" + "+sNumberp+" = "+sum);
            out.println("<br>");
            out.println("<p>"+fNumberm+" + "+sNumberm+" = "+multi);
            out.println("</body></html>");
        }else System.out.println("You Have Nullables");
    }
}
