package edu.miu.waa.secondspringboot.service;

import edu.miu.waa.secondspringboot.domin.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    public List<Post> getPosts();
    public void addPost(Post post);
    public Optional<Post> getById(long id);
    public void deletePostById(long id);
}
