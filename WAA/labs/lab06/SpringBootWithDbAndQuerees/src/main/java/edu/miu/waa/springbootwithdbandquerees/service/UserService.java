package edu.miu.waa.springbootwithdbandquerees.service;


import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import edu.miu.waa.springbootwithdbandquerees.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public List<User> getAllUsers();
    public User getUserById(long id);
    public User addUser(User u);
    public List<Post> getAllPosts(long id);
    public List<User> getUsersGTPosts();

}
