package com.sunsetsacco.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunsetsacco.entities.User;
import com.sunsetsacco.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    //create
    public User saveUser(User user){
        return userRepository.save(user);
    }
    //get
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }
    //getby id
    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }
    //getby name
    public User getUserByUserName(String username) {
        return userRepository.findUserByUsername(username).orElse(null);
    }
    //update
    public User updateUser(User user){
        return userRepository.save(user);
    }
    //delete
    public void deleteUser(Integer id){
        userRepository.deleteById(id);
    }

}