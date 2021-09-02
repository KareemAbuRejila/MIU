package edu.miu.controller;

import edu.miu.domain.User;
import edu.miu.repository.UserRepositoryImpl;
import edu.miu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class UserController {

//    @Autowired
//    UserService userService;

    UserService userService;

    @Autowired
    public void setUserService(UserService userService){
        this.userService = userService;
    }

    

    @GetMapping("user/{id}")
    public String getById(Model model, @PathVariable("id") int id){
        User u = userService.getUser(id);
        model.addAttribute("name", u.getName());
        return "index";
    }





}
