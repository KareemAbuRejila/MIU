<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet"
	href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
<title>Size Demo</title>
</head>
<body>
	<section>
		<div class="jumbotron">
			<div class="container">
				<h1>Size Demo</h1>
			</div>
		</div>
	</section>
	<section class="container">
		<div class="row">
			<form action="sizechoices" method="post">
				<p>
					<label for="size">Size Choices</label>
				</p>
				<div>
					<input type="checkbox" id="small" name="sizes" value="Small">
					<label for="small">Small</label>
				</div>
				<div>
					<input type="checkbox" id="medium" name="sizes" value="Medium">
					<label for="medium">Medium</label>
				</div>
				<div>
					<input type="checkbox" id="large" name="sizes" value="Large">
					<label for="large">Large</label>
				</div>

				<p id="buttons">
					<input id="reset" type="reset" tabindex="4"> <input
						id="submit" type="submit" tabindex="5" value="Choose size">
				</p>

			</form>
		</div>
	</section>
</body>
</html>
