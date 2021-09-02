package edu.miu.waa.curdwithdbsecondspringboot.service;


import edu.miu.waa.curdwithdbsecondspringboot.domin.Post;
import edu.miu.waa.curdwithdbsecondspringboot.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository postRepository;


    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Optional<Post> findById(long id) {
        return postRepository.findById(id);
    }

    @Override
    public void deletePostById(long id){
        postRepository.deleteById(id);
    }

    @Override
    public String fullPostUpdate(long id,String title) {
        if (postRepository.existsById(id)){
            Post post=postRepository.findById(id).get();
            post.setTitle(title);
            if (addPost(post)!=null)
                return "Successfully Update";
        }
        return "Bad Update";
    }

    @Override
    public String potentialPostUpdate(long id, Post post) {
        if (postRepository.existsById(id)){
            post.setId(id);
            Post oldPost=postRepository.findById(id).get();
            if (post.getAuthor()==null)
                post.setAuthor(oldPost.getAuthor());
            if (post.getContent()==null)
                post.setContent(oldPost.getContent());
            if (post.getTitle()==null)
                post.setTitle(oldPost.getTitle());
            if (addPost(post)!=null)
                return "Successfully Update";
        }
        return "Bad Update";
    }


}
