package edu.miu.waa.springbootwithsecurity.repository;

import edu.miu.waa.springbootwithsecurity.domin.Post;
import edu.miu.waa.springbootwithsecurity.domin.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersRepository extends CrudRepository<User, Long> {

    @Query(value = "select user from User user where user.username = :userName")
    public Optional<User> findByUserName(String userName);

    @Query(value = "select user from User user where user.username = :name")
    public Optional<User> findByName(String name);

    @Query(value = "select user from User user where user.posts.size >1")
    public List<User> findUsersHaveMoreThanOnePost();

    @Query(value = "select user.id,user.name from User user where user.id=:id")
    public Optional<User> getNameAndId(long id);

    @Query(value = "select user.posts from User user where user.id=:id")
    public List<Post> findPostsById(long id);

}
