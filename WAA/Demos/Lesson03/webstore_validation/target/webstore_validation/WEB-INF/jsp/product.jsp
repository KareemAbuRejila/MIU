
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

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
			<p>All the available products in our store</p>
		</div>
	</div>
	</section>
	
	<section class="container">
		<div class="row">
			<div class="col-md-5">
				<img alt="${product.name }" src="<c:url value="/img/${product.productId }.png"></c:url>" style="width:100%"/>
			</div>
			<div class="col-md-5" style="padding-bottom: 15px">
				<div class="thumbnail">
					<div class="caption">
						<h3>${product.name }</h3>
						<p>${product.description }</p>
						<p>
							<strong>Item Code: </strong>
							<span class="label label-warning">${product.productId }</span>
						</p>
						<p>
							<strong>Manufacturer: </strong>
							${product.manufacturer }
						</p>
						<p>
							<strong>Category: </strong>
							${product.category }
						</p>
						<p>
							<strong>Available units in stock: </strong>
							${product.unitPrice }
						</p>
						<h4>${product.unitPrice }</h4>
						<p><a href="<spring:url value="/products" />" class="btn btn-primary"><span class="glyphicon-shopping-cart glyphicon"></span>Back</a></p>
						<p>
							<a href="#" class="btn btn-warning btn-large">
								<span class="glyphicon-shopping-cart glyphicon">Order Now</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</body>
</html>