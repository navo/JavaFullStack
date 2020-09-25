package com.MusicApp.Registration.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MusicApp.Registration.Entity.FavouriteEntity;
import com.MusicApp.Registration.dao.AddFavoriteDAO;
import com.MusicApp.Registration.model.Favorite;

@Service
public class AddFavoriteServiceImpl implements AddFavoriteService{

	@Autowired
	AddFavoriteDAO dao;
	
	@Override
	public Boolean addSongToFavorite(Favorite fav) throws Exception {
		if(dao.findBySongIdAndUserId(fav.getId(),fav.getUserId())!=null)
				{
			return false;
				}
		else
		{
		FavouriteEntity ent=new FavouriteEntity();
		ent.setSongId(fav.getId());
		ent.setUserId(fav.getUserId());
		if(dao.save(ent)!=null) {
			return true;
		}
		else {
			return false;
		}
	}
	}

	@Override
	public Boolean deleteFav(Favorite fav) {
		FavouriteEntity ent=dao.findBySongIdAndUserId(fav.getId(), fav.getUserId());
		if(ent!=null) {
			dao.delete(ent);
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public List<String> viewFav(String userId) {
		List<FavouriteEntity> ent= dao.findByUserId(userId);
		List<String> list=new ArrayList<>();
		for(FavouriteEntity fav:ent) {
			list.add(fav.getSongId());
		}
		return list;
	}

}
