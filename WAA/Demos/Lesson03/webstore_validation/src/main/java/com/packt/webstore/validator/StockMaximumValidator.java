package com.packt.webstore.validator;

import java.math.BigDecimal;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.packt.webstore.domain.Product;
import org.springframework.stereotype.Component;

@Component
public class StockMaximumValidator implements ConstraintValidator<StockMaximum, Product> {
	BigDecimal maxValue = null;

	public void initialize(StockMaximum constraintAnnotation) {

		// get annotation parameter
		int maximum = constraintAnnotation.maximum();
		maxValue = new BigDecimal(maximum);
		System.out.println(constraintAnnotation.min());


	}

	@Override
	public boolean isValid(Product product, final ConstraintValidatorContext context) {
		BigDecimal unitPrice;
		Long unitsInStock;

		unitsInStock = product.getUnitsInStock();
		unitPrice = product.getUnitPrice();

		BigDecimal currentValue = new BigDecimal(0);
		if (unitsInStock > 0) {
			currentValue = unitPrice.multiply(new BigDecimal(unitsInStock));
		}

		if (currentValue.compareTo(maxValue) >= 0)
			return false;

		return true;
	}
}
