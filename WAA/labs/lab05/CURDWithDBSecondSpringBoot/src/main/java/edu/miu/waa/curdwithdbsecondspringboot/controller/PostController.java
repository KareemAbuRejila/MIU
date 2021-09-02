package edu.miu.waa.curdwithdbsecondspringboot.controller;

import edu.miu.waa.curdwithdbsecondspringboot.domin.Post;
import edu.miu.waa.curdwithdbsecondspringboot.service.PostService;
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
    public List<Post> testPost(){
        return postService.findAll();
    }

    @PostMapping
    public Post addPost(@RequestBody Post post){
        return postService.addPost(post);
    }

    @GetMapping("/{id}")
    public Optional<Post> getById(@PathVariable("id") long id){
        return postService.findById(id);
    }
    @DeleteMapping("/{id}")
    public void deletePostById(@PathVariable("id") long id){
        postService.deletePostById(id);
    }

    @PutMapping("/{id}")
    public String FullPostUpdate(@PathVariable("id") long id,@RequestParam("title") String title){
        return postService.fullPostUpdate(id,title);
    }
    @PatchMapping("/{id}")
    public String PotentialPostUpdate(@PathVariable("id") long id, @RequestBody Post post){
        return postService.potentialPostUpdate(id,post);
    }
}
