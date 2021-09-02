package edu.miu.waa.curdwithdbsecondspringboot.repository;



import edu.miu.waa.curdwithdbsecondspringboot.domin.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends CrudRepository<Post,Long> {

    public List<Post> findAll();

    public boolean existsById(long Id);
    public Post save(Post post);

    public Optional<Post> findById(long id);
    public void deleteById(long id);
}
