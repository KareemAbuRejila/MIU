package mvc;

import mvc.models.Operation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import java.util.HashMap;
import java.util.Map;

@Controller
public class CalculatorController {
    @RequestMapping("/calc")
    public ModelAndView hello( @RequestParam(value="num1") String num1,
                        @RequestParam(value="num2") String num2,
                               @RequestParam(value="op") String op) {

        Operation operation=getTheResult(Double.parseDouble(num1),Double.parseDouble(num2),op);


        Map<String, Object> params = new HashMap<>();
        params.put("num1", operation.getNumber1());
        params.put("op", operation.getOp());
        params.put("num2", operation.getNumber2());
        params.put("result", operation.getResult());


        return new ModelAndView("calculator",params);
    }
    private Operation getTheResult(double number1, double number2, String op) {
        double result=0;
        if (op==null) System.out.println("The operation is null");
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

