package com.MusicApp.Registration.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.MusicApp.Registration.model.Bio;



public interface Biodao extends MongoRepository<Bio, String>  {


	public Bio findByuserId(String userId);
	

}
