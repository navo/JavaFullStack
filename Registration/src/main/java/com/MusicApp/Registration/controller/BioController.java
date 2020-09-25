package com.MusicApp.Registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MusicApp.Registration.model.Bio;
import com.MusicApp.Registration.service.BioService;

@CrossOrigin
@RestController
@RequestMapping("/bio")

public class BioController {
	@Autowired
	BioService bioService;

	@GetMapping(value = "/view/{userId}")
	public Bio getBio(@PathVariable String userId) throws Exception {

		return bioService.viewBio(userId);

	}

	@PostMapping(value = "/addbio")
	public Bio addBio(@RequestBody Bio bio) throws Exception {

		return bioService.saveBio(bio);

	}

	@DeleteMapping(value = "/delbio/{userId}")
	public Bio delBio(@PathVariable String userId) throws Exception {
		return bioService.deleteBio(userId);
	}
	/*
	 * @PutMapping(value = "/update") public Bio updateBio(@RequestBody Bio
	 * bio)throws Exception{ return bioService.saveBio(bio); }
	 */

}
