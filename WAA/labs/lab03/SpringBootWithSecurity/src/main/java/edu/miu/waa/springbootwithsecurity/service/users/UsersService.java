package edu.miu.waa.springbootwithsecurity.service.users;

import edu.miu.waa.springbootwithsecurity.domin.Post;
import edu.miu.waa.springbootwithsecurity.domin.User;


import java.util.List;
import java.util.Optional;

public interface UsersService {

    public Iterable<User> getAllUsers();
    public Optional<User> getOneUserById(long id);
    public Optional<User> findByUserName(String userName);
    public Optional<User> findByName(String name);
    public Optional<User> findUserAndId(long id);

    public User addUser(User user);
    public List<Post> getAllPostsForOneUser(long id);
    public List<User> findUsersHaveMoreThanOnePost();
}
