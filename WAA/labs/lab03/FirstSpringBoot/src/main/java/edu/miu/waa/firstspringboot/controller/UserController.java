package edu.miu.waa.firstspringboot.controller;


import edu.miu.waa.firstspringboot.domain.User;
import edu.miu.waa.firstspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping("user/{id}")
    public String getById(Model model, @PathVariable("id") int id){
        User u = userService.getUser(id);
        if (u!=null)
        model.addAttribute("name", u.getName());
        return "index";
    }

}
