package edu.miu.waa.springbootwithsecurity.repository;

import edu.miu.waa.springbootwithsecurity.domin.Post;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface PostsRepository extends CrudRepository<Post,Long>{
}
