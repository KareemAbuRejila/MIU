package edu.miu.waa.springbootwithsecurity.controller;


import edu.miu.waa.springbootwithsecurity.domin.Post;
import edu.miu.waa.springbootwithsecurity.service.posts.PostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class IndexController {

    @Autowired
    PostsService postsService;

    @GetMapping("/home")
    public String homePage(){
        return "Welcome To My Page";
    }


}
