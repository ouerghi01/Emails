package com.Auto.App.Services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.Auto.App.Entity.User.User;
import com.Auto.App.Entity.User.UserRepository;
import com.Auto.App.dtos.SignUpDto;

@Service
public class AuthService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }

    public UserDetails signUp(SignUpDto signUpDto) {
        if (userRepository.findByEmail(signUpDto.email()) != null) {
            throw new RuntimeException("Email already exists");
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(signUpDto.password());
        User user = new User(UUID.randomUUID(), signUpDto.name(), signUpDto.email(), encryptedPassword, signUpDto.role());
       
        
        return userRepository.save(user);
    }
   public User getUserByEmail(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }
   

}
