package edu.miu.waa.springbootwithsecurity.controller;

import edu.miu.waa.springbootwithsecurity.domin.User;
import edu.miu.waa.springbootwithsecurity.service.users.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    UsersService usersService;

    @PostMapping
    public User AddUser(@RequestBody User user){
        return usersService.addUser(user);
    }
    @GetMapping
    public Iterable<User> getUsers(){
        return usersService.getAllUsers();
    }
}
