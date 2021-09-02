package edu.miu.waa.springbootwithsecurity.service.posts;



import edu.miu.waa.springbootwithsecurity.domin.Post;

import java.util.List;
import java.util.Optional;

public interface PostsService {

    public Iterable<Post> findAll();
    public Post addPost(Post post);
    public Optional<Post> findById(long id);
    public void deletePostById(long id);
    public String fullPostUpdate(long id,String title);
    public String potentialPostUpdate(long id, Post post);

}
