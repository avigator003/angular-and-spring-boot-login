package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WebController {
	
	@Autowired
	private UserService service;
	
	
	
	@PostMapping("/login")
	public User login(@RequestBody User user1)
	
	{
		String username=user1.getUsername();
		String password=user1.getPassword();
		User user=service.login(username,password);
		if(user==null)
			
		{
			return null;}
		else {
return user;
		}
	

}
}
