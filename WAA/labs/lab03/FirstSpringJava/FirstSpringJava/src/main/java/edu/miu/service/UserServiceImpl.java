package edu.miu.service;

import edu.miu.domain.User;
import edu.miu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User getUser(int id) {
        return userRepository.getUser(id);
    }
}
