package cs.miu.edu.models;

public class Question {
    private String id;
    private String value;
    private String answer;

    public Question(String id, String value, String answer) {
        this.id = id;
        this.value = value;
        this.answer = answer;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
