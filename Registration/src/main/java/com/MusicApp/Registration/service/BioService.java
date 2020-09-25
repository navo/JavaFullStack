package com.MusicApp.Registration.service;

import com.MusicApp.Registration.model.Bio;

public interface BioService {

	public Bio saveBio(Bio bio)throws Exception;;

	public Bio deleteBio(String userId);

	public Bio viewBio(String userId);

}
