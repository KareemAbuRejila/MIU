package edu.miu.waa.secondspringboot.service;

import edu.miu.waa.secondspringboot.domin.Post;
import edu.miu.waa.secondspringboot.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository postRepository;


    @Override
    public List<Post> getPosts() {
        return postRepository.getAll();
    }

    @Override
    public void addPost(Post post) {
        postRepository.addPost(post);
    }

    @Override
    public Optional<Post> getById(long id) {
        return postRepository.getById(id);
    }

    @Override
    public void deletePostById(long id){
        postRepository.deletePostById(id);
    }


}
