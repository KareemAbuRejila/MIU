<%--
  Created by IntelliJ IDEA.
  User: KareemAbuRejila
  Date: 5/10/2021
  Time: 11:23 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Result</title>
</head>
<body>
<h1>The Number Quiz</h1>
<p>Your score is ${quiz.score}</p>
<p>You have completed the Number Quiz, with a score of ${quiz.score} out of ${quiz.totalQuestions}.</p>
<form method=''><input type='submit' name='reset' value='Do Quiz Again' /></form>

</body>
</html>
