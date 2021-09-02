package edu.miu.waa.springbootwithsecurity.controller;

import edu.miu.waa.springbootwithsecurity.domin.Post;
import edu.miu.waa.springbootwithsecurity.service.posts.PostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/posts")
@RestController
public class PostsController {

    @Autowired
    PostsService postsService;

    @GetMapping
    public Iterable<Post> getPosts(){
        return postsService.findAll();
    }
    @DeleteMapping("{id}")
    public void deletePost(@PathVariable long id){
        postsService.deletePostById(id);
    }
    @GetMapping("{id}")
    public Post getOnePostById(@PathVariable long id){
        return postsService.findById(id).get();
    }
    @PostMapping
    public void addPost(@RequestBody Post post){
        postsService.addPost(post);
    }
}
