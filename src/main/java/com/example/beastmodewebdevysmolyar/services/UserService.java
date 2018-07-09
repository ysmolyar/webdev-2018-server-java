package com.example.beastmodewebdevysmolyar.services;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.beastmodewebdevysmolyar.models.User;

@RestController
public class UserService {
//	http://localhost:8080/register
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user) {
		return user;
	}
}
