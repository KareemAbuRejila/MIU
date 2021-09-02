package edu.miu.waa.secondspringboot.controller;

import edu.miu.waa.secondspringboot.domin.Post;
import edu.miu.waa.secondspringboot.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping
    public List<Post> testPost(){
        return postService.getPosts();
    }

    @PostMapping
    public void addPost(@RequestBody Post post){
        postService.addPost(post);
    }

    @GetMapping("/{id}")
    public Optional<Post> getById(@PathVariable("id") long id){
        return postService.getById(id);
    }
    @DeleteMapping("/{id}")
    public void deletePostById(@PathVariable("id") long id){
        postService.deletePostById(id);
    }
}
