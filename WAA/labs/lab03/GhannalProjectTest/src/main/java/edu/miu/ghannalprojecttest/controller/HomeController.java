package edu.miu.ghannalprojecttest.controller;

import edu.miu.ghannalprojecttest.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

    HomeService homeService;

    @Autowired
    public void setHomeService(HomeService homeService){this.homeService=homeService;}

    @GetMapping
    public String getHome(Model model){
        model.addAttribute("name",homeService.getHome());
        return "index";
    }
}
