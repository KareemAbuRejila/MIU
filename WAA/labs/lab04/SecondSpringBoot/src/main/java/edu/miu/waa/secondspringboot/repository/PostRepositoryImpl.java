package edu.miu.waa.secondspringboot.repository;

import edu.miu.waa.secondspringboot.domin.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Repository
public class PostRepositoryImpl  implements PostRepository{

    List<Post> posts=new ArrayList<>(Arrays.asList(
            new Post(1,"MIU"),
            new Post(2,"Manasaf")
    ));
    @Override
    public List<Post> getAll() {
        return posts;
    }

    @Override
    public void addPost(Post post) {
        posts.add(post);
    }

    public Optional<Post> getById(long id){
        return posts.stream()
                .filter(p-> p.getId()==id)
                .findFirst();
    }

    public void deletePostById(long id){
        if (!getById(id).isEmpty())
            posts.removeIf(p->p.getId()==id);
    }

}
