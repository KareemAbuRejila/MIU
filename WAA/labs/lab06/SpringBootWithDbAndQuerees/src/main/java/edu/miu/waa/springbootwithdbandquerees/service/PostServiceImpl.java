package edu.miu.waa.springbootwithdbandquerees.service;


import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import edu.miu.waa.springbootwithdbandquerees.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
//import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{
    @Autowired
    PostRepository postRepository;
    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }
    @Override
    public Optional<Post> findById(long id) {
        return postRepository.findById(id);
    }

    @Override
    public Post addPost(Post p) {
        return  postRepository.save(p);
    }
    @Override
    public Post deletePostById(long id) {
        return  postRepository.deleteById(id);
    }
    @Override
    public Post editPost(Post p, long id)  {

        Post post =findById(id).get();
        p.setId(id);
        if (p.getAuthor()==null)
            p.setAuthor(post.getAuthor());
        if (p.getTitle()==null)
            p.setTitle(post.getTitle());
        if (p.getContent()==null)
            p.setContent(post.getContent());

        post=p;
        return  postRepository.save(p);
    }


}
