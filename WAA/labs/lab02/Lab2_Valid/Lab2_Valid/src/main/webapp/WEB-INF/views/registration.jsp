<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Registration</title>
    <link rel="stylesheet" type="text/css" href="<c:url value="../../resources/css/main.css"/>">

</head>
<body>

<h1>Registration Form</h1><br/>

<div id="global">
    <form:form modelAttribute="student" action="registration" method="post">
        <fieldset>
<%--        <p>--%>
<%--            <form:errors path="*" cssStyle="color:red;"/>--%>
<%--        </p>--%>
        <p>
            <label for="id">ID:</label>
                <form:input path="id" id="id"/>
        <div style="text-align: center">
            <form:errors path="id" cssStyle="color:red"/>
        </div>
        </p>
        <p>
            <label for="firstName">First Name:</label>
                <form:input path="firstName" id="firstName" />
        <div style="text-align: center">
            <form:errors path="firstName" cssStyle="color:red"/>
        </div>
        </p>
        <p>
            <label for="lastName">Last Name:</label>
                <form:input path="lastName" id="lastName"/>
        <div style="text-align: center">
            <form:errors path="lastName" cssStyle="color:red"/>
        </div>
        </p>
        <p>
            <label for="email">Email:</label>
                <form:input path="email" id="email"/>
        <div style="text-align: center">
            <form:errors path="email" cssStyle="color:red"/>
        </div>
        </p>
    <p>
        <label for="gander">Gander</label>
        <form:select path="gander" id="gander">
            <form:option value="">Select Gander</form:option>
            <form:option value="M">Male</form:option>
            <form:option value="F">Female</form:option>
        </form:select>
    <div style="text-align: center">
        <form:errors path="gander" cssStyle="color:red"/>
    </div>

    </p>
    <p>
        <label for="birthDate">Date Of Birth: </label>
        <form:input path="birthday" id="birthDate" />
        <form:errors path="birthday" cssStyle="color : red;" />
    </p>
        </p>
        <h2>Phone: </h2>
        <p>
            <label for="phoneAreaCode">Phone Area Code:</label>
                <form:input path="phone.area" id="phoneAreaCode"/>
        <div style="text-align: center">
            <form:errors path="phone.area" cssStyle="color:red"/>
        </div>
        </p>
        <p>
            <label for="phonePrefix">Phone Prefix:</label>
                <form:input path="phone.prefix" id="phonePrefix"/>
        <div style="text-align: center">
            <form:errors path="phone.prefix" cssStyle="color:red"/>
        </div>
        </p>
        <p>
            <label for="phoneNumber">Phone Number:</label>
                <form:input path="phone.number" id="phoneNumber"/>
        <div style="text-align: center">
            <form:errors path="phone.number" cssStyle="color:red"/>
        </div>
        </p>
        <p id="buttons">
            <input id="reset" type="reset" tabindex="4">
            <input id="submit" type="submit" tabindex="5" value="Add Student">
        </p>



        </fieldset>
    </form:form>
</div>
</body>


</body>
</html>