package servlets.models;

public class Operation{
    double number1;
    double number2;
    String op;
    double result;

    public Operation(double number1, double number2, String op, double result) {
        this.number1 = number1;
        this.number2 = number2;
        this.op = op;
        this.result = result;
    }

    public double getNumber1() {
        return number1;
    }

    public void setNumber1(double number1) {
        this.number1 = number1;
    }

    public double getNumber2() {
        return number2;
    }

    public void setNumber2(double number2) {
        this.number2 = number2;
    }

    public String getOp() {
        return op;
    }

    public void setOp(String op) {
        this.op = op;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return number1 +" " +op+" " + number2 +" =" +result;
    }
}

