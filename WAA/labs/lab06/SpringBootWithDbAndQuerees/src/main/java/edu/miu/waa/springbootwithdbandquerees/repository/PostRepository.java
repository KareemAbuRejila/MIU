package edu.miu.waa.springbootwithdbandquerees.repository;


import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends CrudRepository<Post, Long> {
    public List<Post> findAll();
    public Optional<Post> findById(long id);

    public Post save(Post p);
    public Post deleteById(long id);
    //public Post (int id);

}
