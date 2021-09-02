package com.packt.webstore.controller;

import com.packt.webstore.domain.Test;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {




	@Autowired
	Test t1;

	Test t2 = new Test();

	@RequestMapping
	public String welcome(Model model) {

		t1.setY("Hello");
		t2.setY("Hello");

		model.addAttribute("greeting", "Welcome to Web Store!");
		model.addAttribute("tagline", "The one and only amazing web store");

		return "welcome";
	}
}
