package edu.miu.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(name="calculator", value="/calculator")
public class Calculator extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        String s1 = request.getParameter("number1");
        String s2 = request.getParameter("number2");
        if(s1 != null && s2 != null){
            out.println( s1 + " + " + s2 + " = "  + (Integer.parseInt(s1) + Integer.parseInt(s2)  ));
        }
        String number3 = request.getParameter("number3");
        String number4 = request.getParameter("number4");

        out.println("<br/>");
        if(number3 != null && number4 != null) {
            out.println(number3 + " * " + number4 + " = " + (Integer.parseInt(number3) * Integer.parseInt(number4)));
        }
        out.println("</body></html>");
    }
}
