<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Products</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>

	
	<section>
	<div class="jumbotron">
		<div class="container">
			<h1>Products</h1>
			<p>Add Products</p>
		</div>
	</div>
	</section>

	<section class="container"> 
	<form:form modelAttribute="newProduct" class="form-horizontal">
		<form:errors path="*" cssClass="alert alert-danger" element="div"></form:errors>
		<fieldset>
			<legend>Add new product</legend>
			<div class="form-group">
				<label class="control-label col-lg-2" for="productId">
					<spring:message code="addProduct.form.productId.label" />
				</label>
				<div class="col-lg-10">
					<form:input path="productId" id="productId"
						class="form:input-large" />
					<form:errors path="productId" cssClass="text-danger"></form:errors>
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-lg-2" for="name"><spring:message code="addProduct.form.name.label" /></label>
				<div class="col-lg-10">
					<form:input path="name" id="name" class="form:input-large" />
					<form:errors path="name" cssClass="text-danger"></form:errors>
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-lg-2" for="unitPrice"><spring:message code="addProduct.form.unitPrice.label" /></label>
				<div class="col-lg-10">
					<form:input path="unitPrice" id="unitPrice"
						class="form:input-large" />
						<form:errors path="unitPrice" cssClass="text-danger"></form:errors>
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-lg-2" for="manufacturer"><spring:message code="addProduct.form.manufacturer.label" /></label>
				<div class="col-lg-10">
					<form:input path="manufacturer" id="manufacturer"
						class="form:input-large" />
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-lg-2" for="category"><spring:message code="addProduct.form.category.label" /></label>
				<div class="col-lg-10">
					<form:input path="category" id="category" class="form:input-large" />
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-lg-2" for="unitsInStock"><spring:message code="addProduct.form.unitsInStock.label" /></label>
				<div class="col-lg-10">
					<form:input path="unitsInStock" id="unitsInStock"
						class="form:input-large" />
				</div>
			</div>

			<%-- <div class="form-group">
				<label class="control-label col-lg-2" for="unitsInOrder">Units
					in Order</label>
				<div class="col-lg-10">
					<form:input path="unitsInOrder" id="unitsInOrder"
						class="form:input-large" />
				</div>
			</div>
 --%>
			<div class="form-group">
				<label class="control-label col-lg-2" for="description"><spring:message code="addProduct.form.description.label" /></label>
				<div class="col-lg-10">
					<form:textarea path="description" id="description" rows="2" />
				</div>
			</div>

			<%-- <div class="form-group">
				<label class="control-label col-lg-2" for="discontinued">Discontinued</label>
				<div class="col-lg-10">
					<form:checkbox path="discontinued" id="discontinued" />
				</div>
			</div> --%>


			<div class="form-group">
				<label class="control-label col-lg-2" for="condition"><spring:message code="addProduct.form.condition.label" /></label>
				<div class="col-lg-10">
					<form:radiobutton path="condition" value="New" />
						<spring:message code="addProduct.form.condition.new" />
					<form:radiobutton path="condition" value="Old" />
						<spring:message code="addProduct.form.condition.old" />
					<form:radiobutton path="condition" value="Refurbished" />
						<spring:message code="addProduct.form.condition.refurbished" />
				</div>
			</div>
			
			<div class="form-group">
				<div class="col-lg-10 col-lg-offset-2">
					<input type="submit" id="btnAdd" class="btn btn-primary" value="Add"/>
				</div>
			</div>

		</fieldset>
	</form:form> </section>
</body>
</html>