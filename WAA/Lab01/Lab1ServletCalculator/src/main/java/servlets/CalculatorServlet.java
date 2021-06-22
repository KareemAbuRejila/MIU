package servlets;

import servlets.models.Operation;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/calc")
public class CalculatorServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //show calculator page
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>SIMPLE CALCULATOR<br><br><br></head>");
        out.println("<body>");
        out.println("<form method = 'get' action = 'calc'>");
        out.println("enter the first number:<br>");
        out.println("<input type = 'text' name='number1'><br><br>");
        out.println("enter the second number:<br>");
        out.println("<input type = 'text' name='number2'><br><br>");
        out.println("enter the operation:<br><br>");
        out.println("<input type ='radio' name = 'op' value = '+'>add<br>");
        out.println("<input type = 'radio' name = 'op' value = '-'>sub<br>");
        out.println("<input type = 'radio' name = 'op' value = '*'>mul<br>");
        out.println("<input type = 'radio' name = 'op' value = '/'>div<br><br>");
        out.println("<input type = 'submit' name = 'result' value = 'submit'><br>");
        if ((request.getParameter("number1"))!=null&&(request.getParameter("number2"))!=null&&request.getParameter("op")!=null){
            double number1=Double.parseDouble(request.getParameter("number1"));
            double number2=Double.parseDouble(request.getParameter("number2"));
            String op=request.getParameter("op");
            out.println("<br> <h2>The Result of "+getTheResult(number1,number2,op)+"</h2>");
            saveTheOperationToTheSession(getTheResult(number1,number2,op),request);
        }
        drawTheTable(out,request);
        out.println("</body>");
        out.println("</html>");
        out.flush();

    }

    private void drawTheTable(PrintWriter out, HttpServletRequest request) {
        out.println("<table style=\"width:25% ;border:1px solid black\">");
        out.println("<tr style=\"border:1px solid black\">\n" +
                "    <th style=\"border:1px solid black\">First</th>\n" +
                "    <th style=\"border:1px solid black\">Operation</th>\n" +
                "    <th style=\"border:1px solid black\">Second</th>\n" +
                "    <th style=\"border:1px solid black\">result</th>\n" +
                "  </tr>");
        if (request.getSession().getAttribute("ops")!=null){
            ArrayList<Operation> ops=(ArrayList<Operation>)request.getSession().getAttribute("ops");
            for (Operation op:
                 ops) {
                out.println("<tr style=\"border:1px solid black\">\n" +
                        "    <th style=\"border:1px solid black\">"+op.getNumber1()+"</th>\n" +
                        "    <th style=\"border:1px solid black\">"+op.getOp()+"</th>\n" +
                        "    <th style=\"border:1px solid black\">"+op.getNumber2()+"</th>\n" +
                        "    <th style=\"border:1px solid black\">"+op.getResult()+"</th>\n" +
                        "  </tr>");
            }
        }

        out.println("</table>");
    }

    private void saveTheOperationToTheSession(Operation operation, HttpServletRequest request) {
        HttpSession session=request.getSession();
        ArrayList<Operation> operations=
                session.getAttribute("ops")!=null?
                        (ArrayList<Operation>) session.getAttribute("ops"):
                        new ArrayList<Operation>();
        operations.add(operation);
        session.setAttribute("ops",operations);


    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //show result page
        PrintWriter out = response.getWriter();
//        response.sendRedirect("/calc");
//        out.println("doPost is called");
//        out.flush();
    }

    private Operation getTheResult(double number1, double number2, String op) {
        double result=0;
        if (op==null)log("The operation is null");
        switch (op){
            case "+":
                result=number1+number2;
                break;
            case "-":
                result=number1-number2;
                break;
            case "*":
                result=number1*number2;
                break;
            case "/":
                result=number1/number2;
                break;
        }

        return new Operation(number1,number2,op,result);
    }

}
