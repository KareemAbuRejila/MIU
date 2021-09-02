package edu.miu.waa.springbootwithdbandquerees.service;

import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PostService {
    public List<Post> findAll();
    public Optional<Post> findById(long id);
    public Post addPost(Post p);
    public Post deletePostById(long id);
    public Post editPost(Post p,long id);

}
