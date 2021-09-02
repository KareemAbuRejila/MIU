package com.packt.webstore.controller;

import java.util.Arrays;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SizeController {
	
	@RequestMapping(value="sizechoices", method=RequestMethod.GET)
	public String getSizeForm(@RequestParam("sizes")String[] sizeArray, Model model) {
		model.addAttribute("sizes", sizeArray);
		return "sizes";
	}
	
//	@RequestMapping(value="sizechoices", method=RequestMethod.POST)
//	public String processSizeForm(@RequestParam("sizes")String[] sizeArray) {
//		Arrays.stream(sizeArray).forEach(System.out::println);
//		return "sizes";
//	}

}
