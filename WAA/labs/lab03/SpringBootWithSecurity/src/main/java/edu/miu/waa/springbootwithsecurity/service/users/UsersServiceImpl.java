package edu.miu.waa.springbootwithsecurity.service.users;

import edu.miu.waa.springbootwithsecurity.domin.Post;
import edu.miu.waa.springbootwithsecurity.domin.User;
import edu.miu.waa.springbootwithsecurity.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService{

    @Autowired
    UsersRepository usersRepository;

    @Override
    public Iterable<User> getAllUsers() {
        return usersRepository.findAll();
    }

    @Override
    public Optional<User> getOneUserById(long id) {
        return usersRepository.findById(id);
    }

    @Override
    public Optional<User> findByUserName(String userName) {
        return usersRepository.findByUserName(userName);
    }

    @Override
    public Optional<User> findByName(String name) {
        return usersRepository.findByName(name);
    }

    @Override
    public Optional<User> findUserAndId(long id) {
        return usersRepository.getNameAndId(id);
    }

    @Override
    public User addUser(User user) {
        return usersRepository.save(user);
    }

    @Override
    public List<Post> getAllPostsForOneUser(long id) {
        return usersRepository.findPostsById(id);
    }

    @Override
    public List<User> findUsersHaveMoreThanOnePost() {
        return usersRepository.findUsersHaveMoreThanOnePost();
    }
}
