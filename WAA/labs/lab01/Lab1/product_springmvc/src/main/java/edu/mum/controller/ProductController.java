package edu.mum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import edu.mum.domain.Category;
import edu.mum.domain.Product;
import edu.mum.service.CategoryService;
import edu.mum.service.ProductService;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/product")
@Controller
public class ProductController {

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private ProductService productService;

	@RequestMapping
	public String getProductForm(  Model model ) {
		model.addAttribute("categories",categoryService.getAll());
		return "ProductForm";
	}


	@RequestMapping(method = RequestMethod.POST)
	public String saveProduct(Product product) {
		Category category=categoryService.getCategory(product.getCategory().getId());
		product.setCategory(category);
		productService.save(product);
		return "ProductDetails";
	}

	@RequestMapping("/listproducts")
	public String listProducts(Model model) {
		model.addAttribute("products",productService.getAll());
		return "ListProducts";
	}


	@RequestMapping("/productfind")
	public String findProduct() {
		return "Find";
	}
	@RequestMapping("/product")
	public String product(Model model, @RequestParam("id") int id){
		model.addAttribute("product",productService.findProduct(id));
		return "SingleProduct";
	}
}
