package com.packt.webstore.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.packt.webstore.domain.Product;
import com.packt.webstore.service.ProductService;
import org.springframework.stereotype.Component;

@Component
public class ProductIdValidator implements ConstraintValidator<ProductId, String> {

	@Autowired
	private ProductService productService;

	@Override
	public void initialize(ProductId arg0) {
	}

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		Product product = null;
		try {
			product = productService.getProductById(value);
		} catch (Exception e) {
			System.out.println("Couldn't find product...");
		}
		return product == null ? true : false;
	}

}
