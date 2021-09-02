package edu.miu.waa.springbootwithdbandquerees.repository;

import edu.miu.waa.springbootwithdbandquerees.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository <User, Long> {
@Query(value = "select u from User u where u.posts.size>1")
    public List<User> getUsersGTOnePost();

}
