package edu.miu.waa.firstspringboot.repository;

import edu.miu.waa.firstspringboot.domain.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository{

    User user1 = new User(1, "John");
    User user2 = new User(2, "Dean");
    User user3 = new User(3, "Milton");
    List<User> users;

    @Override
    public User getUser(int id) {
        // fake database query
        users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        users.add(user3);

        return id>users.size()?null:users.get(id-1);
    }
}
