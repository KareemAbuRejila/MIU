package edu.miu.waa.springbootwithdbandquerees.controller;


import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import edu.miu.waa.springbootwithdbandquerees.domain.User;
import edu.miu.waa.springbootwithdbandquerees.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;
    @GetMapping
    public List<User>  getAllUsers(){
        return userService.getAllUsers();
    }
    @PostMapping
    public User addUser(@RequestBody  User u){
        return userService.addUser(u);
    }
    @GetMapping("/{id}")
    public User addUser(@PathVariable  long id){
        return userService.getUserById(id);
    }
    @GetMapping("/{id}/posts")
    public List<Post> getAllUserPosts(@PathVariable long id){
        return userService.getUserById(id).getPosts();
    }
    @GetMapping("/morepsts")
    public List<User> getUserGTPosts(){
        return userService.getUsersGTPosts();

    }



}
