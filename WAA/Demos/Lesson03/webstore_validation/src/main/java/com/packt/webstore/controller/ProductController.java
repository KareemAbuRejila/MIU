package com.packt.webstore.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.packt.webstore.domain.Product;
import com.packt.webstore.service.ProductService;

@Controller
@RequestMapping("/")
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping("/products")
	public String list(Model model) {
		System.out.println("========ProductController list()========");
		model.addAttribute("products", productService.getAllProducts());
		return "products";
	}

	@RequestMapping(method = RequestMethod.GET)
	public String getAddNewProductForm(@ModelAttribute("newProduct") Product newProduct, Model model) {
		return "addProduct";
	}

	@RequestMapping(method = RequestMethod.POST)
	public String processAddNewProductForm(@Valid @ModelAttribute("newProduct") Product newProduct,
			BindingResult result, Model model, HttpServletRequest request) {

		if (result.hasErrors()) {
			return "addProduct";
		}

		String[] suppressedFields = result.getSuppressedFields();
		if (suppressedFields.length > 0) {
			throw new RuntimeException("Attempting to bind disallowed fields: "
					+ StringUtils.arrayToCommaDelimitedString(suppressedFields));
		}

		productService.addProduct(newProduct);
		return "redirect:/products";
	}

	@RequestMapping("/product")
	public String getProductDetail(@RequestParam(value = "id", required = false) String productId, Model model) {
		model.addAttribute(productService.getProductById(productId));
		return "product";
	}

	@InitBinder
	public void initialiseBinder(WebDataBinder binder) {
//		binder.setValidator(unitsInStockValidator);
//		binder.setAllowedFields("productId", "name", "unitPrice", "description", "manufacturer", "category",
//				"unitsInStock", "condition", "productImage", "userManual", "language");
		// binder.setDisallowedFields("productImage", "userManual");
		
	}

}
