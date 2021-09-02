package edu.miu.waa.secondspringboot.repository;

import edu.miu.waa.secondspringboot.domin.Post;

import java.util.List;
import java.util.Optional;

public interface PostRepository {

    public List<Post> getAll();

    public void addPost(Post post);

    public Optional<Post> getById(long id);
    public void deletePostById(long id);
}
