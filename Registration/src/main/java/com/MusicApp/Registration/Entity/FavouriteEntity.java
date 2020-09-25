package com.MusicApp.Registration.Entity;

import javax.persistence.Column;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "FavouriteSong")
public class FavouriteEntity {

	@Id
	public String objId;
	
	@Field(name="id")
	private String songId;
	
	@Field(name="userId")
	private String userId;

	

	public String getSongId() {
		return songId;
	}

	public void setSongId(String songId) {
		this.songId = songId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String i) {
		this.userId = i;
	}
	
	
}
