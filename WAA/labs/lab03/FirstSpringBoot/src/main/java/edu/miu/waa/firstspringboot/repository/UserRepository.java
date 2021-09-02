package edu.miu.waa.firstspringboot.repository;


import edu.miu.waa.firstspringboot.domain.User;

public interface UserRepository {

    public User getUser(int id);
}
