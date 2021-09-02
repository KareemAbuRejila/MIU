package edu.miu.waa.springbootwithdbandquerees.service;


import edu.miu.waa.springbootwithdbandquerees.domain.Post;
import edu.miu.waa.springbootwithdbandquerees.domain.User;
import edu.miu.waa.springbootwithdbandquerees.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Override
    public List<User> getAllUsers(){
        return (List<User>) userRepository.findAll();
    }
    @Override
    public User getUserById(long id){
        return  userRepository.findById(id).get();
    }

    @Override
    public User addUser(User u) {
        return userRepository.save(u);
    }

    @Override
    public List<Post> getAllPosts(long id) {
        return userRepository.findById(id).get().getPosts();
    }

    @Override
    public List<User> getUsersGTPosts() {
        return userRepository.getUsersGTOnePost();
    }
}
