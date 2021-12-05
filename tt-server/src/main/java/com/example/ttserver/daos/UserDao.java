package com.example.ttserver.daos;

import com.example.ttserver.models.User;
import com.example.ttserver.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserDao {
  @Autowired
  UserRepository userRepository;
  @GetMapping("/api/users")
  public List<User> findAllUsers() {
    return (List<User>) userRepository.findAll();
  }

  @GetMapping("/api/users/{userId}")
  public User findUserById(@PathVariable("userId") Integer userId) {
    return userRepository.findById(userId).get();
  }
}
