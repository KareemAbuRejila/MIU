<%@ page import="cs.miu.edu.models.Quiz" %><%--
  Created by IntelliJ IDEA.
  User: KareemAbuRejila
  Date: 5/10/2021
  Time: 10:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form value="quiz" method=''><h1>The Number Quiz</h1>
    <p> Your score is ${quiz.score}.</p>
    <p> Guess the next number in the sequence.</p>
    <p>${quiz.nextQuestion.value}</p>
    <p> Your answer: <input type='number' name='answer' /></p>
    <p><input type='submit' value='Submit' /></form>
</body>
</html>
<%--private String getNextQuestion(Quiz quiz) {--%>
<%--StringBuilder sb = new StringBuilder("<form method=''><h1>The Number Quiz</h1>");--%>
<%--sb.append("<p> Your score is " + quiz.getScore() + ".</p>");--%>
<%--sb.append("<p> Guess the next number in the sequence.</p>");--%>
<%--sb.append(quiz.getNextQuestion().getValue());--%>
<%--sb.append("<p> Your answer: <input type='text' name='answer' /></p>");--%>
<%--sb.append("<p><input type='submit' value='Submit' /></form>");--%>
<%--return sb.toString();--%>
<%--}--%>