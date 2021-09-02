package edu.miu.waa.curdwithdbsecondspringboot.service;



import edu.miu.waa.curdwithdbsecondspringboot.domin.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    public List<Post> findAll();
    public Post addPost(Post post);
    public Optional<Post> findById(long id);
    public void deletePostById(long id);
    public String fullPostUpdate(long id,String title);
    public String potentialPostUpdate(long id, Post post);

}
