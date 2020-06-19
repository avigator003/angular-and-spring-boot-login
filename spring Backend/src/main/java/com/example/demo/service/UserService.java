package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repo;
	
	@Autowired
	private EntityManagerFactory manager;
	
	public User login(String username,String password)
	
	
	{
		SessionFactory sessionFactory = manager.unwrap(SessionFactory.class);
	    Session session=sessionFactory.openSession();
		Query query=session.createQuery("from User where username=:username and password=:password");
		query.setParameter("username", username);
		query.setParameter("password",password);
		User user=(User)query.uniqueResult();
		if(user!=null)
		{

			return user;
		}
		else {
			return null;
			
		}
	}
	
}

