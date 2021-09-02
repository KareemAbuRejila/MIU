package edu.miu.waa.springbootwithsecurity.service;

import edu.miu.waa.springbootwithsecurity.domin.User;
import edu.miu.waa.springbootwithsecurity.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

@EnableWebSecurity
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UsersRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(userName);
        user.orElseThrow(() -> new UsernameNotFoundException("Not FOUND..."));
        return new MyUserDetails(user.get());
    }


}
