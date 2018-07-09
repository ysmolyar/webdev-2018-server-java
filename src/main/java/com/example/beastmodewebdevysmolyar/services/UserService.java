package com.example.beastmodewebdevysmolyar.services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import com.example.beastmodewebdevysmolyar.models.User;
import com.example.beastmodewebdevysmolyar.repositories.UserRepository;

@RestController
public class UserService {
//	http://localhost:8080/register
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}
}
