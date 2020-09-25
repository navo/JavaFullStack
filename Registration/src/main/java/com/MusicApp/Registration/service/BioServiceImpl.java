package com.MusicApp.Registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MusicApp.Registration.dao.Biodao;
import com.MusicApp.Registration.model.Bio;

@Service
public class BioServiceImpl implements BioService {

	@Autowired
	Biodao biodao;

	@Override
	public Bio saveBio(Bio bio) {
		biodao.save(bio);
		return bio;
	}

	@Override
	public Bio deleteBio(String userId) {
		Bio bio = new Bio();
		bio = biodao.findByuserId(userId);
		biodao.delete(bio);
		Bio bio1 = new Bio();
		return bio1;
	}

	@Override
	public Bio viewBio(String userId) {
		Bio bio = new Bio();
		bio = biodao.findByuserId(userId);
		if (bio == null) {
			bio = new Bio();
		}
		return bio;
	}

}
