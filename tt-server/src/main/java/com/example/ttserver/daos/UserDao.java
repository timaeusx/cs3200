package com.example.ttserver.daos;

import com.example.ttserver.models.User;
import com.example.ttserver.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
public class UserDao {
  @Autowired
  UserRepository userRepository;

  @PostMapping("/api/users")
  public User createUser(@RequestBody User user) {
    return userRepository.save(user);
  }

  @GetMapping("/api/users")
  public List<User> findAllUsers() {
    return (List<User>) userRepository.findAll();
  }

  @GetMapping("/api/users/{userId}")
  public User findUserById(@PathVariable("userId") Integer id) {
    return userRepository.findById(id).get();
  }

  @PutMapping("/api/users/{userId}")
  public User updateUser(
      @PathVariable("userId") Integer id,
      @RequestBody User userUpdates) {
    User user = userRepository.findUserById(id);
    user.setFirstname(userUpdates.getFirstname());
    user.setLastname(userUpdates.getLastname());
    user.setUsername(userUpdates.getUsername());
    user.setPassword(userUpdates.getPassword());
    user.setEmail(userUpdates.getEmail());
    user.setDob(userUpdates.getDob());
    return userRepository.save(user);
  }

  @DeleteMapping("/api/users/{userId}")
  public void deleteUser(
      @PathVariable("userId") Integer id) {
    userRepository.deleteById(id);
  }
}
