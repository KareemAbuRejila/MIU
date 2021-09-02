package edu.miu.waa.springbootwithdbandquerees.controller;


import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import edu.miu.waa.springbootwithdbandquerees.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
     PostService postService;
    @GetMapping
    public List<Post> getAllPosts(){

        return postService.findAll();
    };
    @GetMapping("/{id}")
    public Optional<Post> getPostById(@PathVariable("id") long id){
        return postService.findById(id);
    }
    @PostMapping
    public void addPost(@RequestBody Post p){
        postService.addPost(p);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable("id") long id )
   {
        postService.deletePostById(id);
    }
    @PutMapping("/{id}")
    public Post editPost(@PathVariable("id") long id,@RequestBody Post p)
    {

        return postService.editPost(p,id);
    }

}
