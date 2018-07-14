package com.example.beastmodewebdevysmolyar.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.beastmodewebdevysmolyar.models.User;
import com.example.beastmodewebdevysmolyar.repositories.UserRepository;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user, HttpSession session) {
		
		User cu = userRepository.save(user);
		
		session.setAttribute("currentUser", cu);
		
		return cu;
	}
	
	@GetMapping("/api/profile")
	public Optional<User> profile(HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");
		return userRepository.findById(currentUser.getId());
	}
	
    @PostMapping("/api/login")
    public User login(	@RequestBody User credentials, HttpSession session) {
     for (User user : userRepository.findAll()) {
      if( user.getUsername().equals(credentials.getUsername()) &&
          user.getPassword().equals(credentials.getPassword())) {
       session.setAttribute("currentUser", user);
       return user;
      }
     }
     return null;
    }


    @PostMapping("/api/logout")
    public void logout(HttpSession session) {
	session.invalidate();
    }

	
	@PutMapping("/api/user/{userId}")
	public User updateUser(
			@PathVariable("userId") int id,
			@RequestBody User newUser) {
		Optional<User> optional = userRepository.findById(id);
		if(optional.isPresent()) {
			User user = optional.get();
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			return userRepository.save(user);
		}
		return null;
	}
	
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserByUserId(@PathVariable("userId") String userId) {
		int id = Integer.parseInt(userId);
		return userRepository.findById(id);
	}
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		userRepository.deleteById(id);
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}
	
}