package com.MusicApp.Registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.MusicApp.Registration.Exception.LoginException;
import com.MusicApp.Registration.Exception.ModificationException;
import com.MusicApp.Registration.Exception.RegistrationException;
import com.MusicApp.Registration.model.User;
import com.MusicApp.Registration.service.RegistrationService;

@CrossOrigin
@RestController
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;

	@PostMapping(value = "/registeruser")
	public User registeruser(@RequestBody User user) {
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = registrationService.fetchUserByEmailId(tempEmailId);
			if (userobj != null) {
				throw new RegistrationException("User with the same Email exists");
				// throw new Exception("user with"+tempEmailId +"is already exist");
			}
		}
		User userobj = null;
		userobj = registrationService.saveUser(user);
		return userobj;
	}

	@PutMapping(value = "/modifyuser")
	public User modifyuser(@RequestBody User user) {
		String tempEmailId = user.getEmailId();
		User userobj = registrationService.fetchUserByEmailId(tempEmailId);
		user.setId(userobj.getId());
		if ((user.getUserName() == null || user.getUserName() == "")
				|| (user.getEmailId() == null || user.getEmailId() == "")
				|| (user.getPassword() == null || user.getPassword() == "")
				|| (user.getId() == null || user.getId() == ""))
			throw new ModificationException("Please Fill out Required Values");
		userobj = registrationService.saveUser(user);

		return userobj;
	}

	@PostMapping(value = "/login")
	public User loginUser(@RequestBody User user) {
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User userobj = null;
		if (tempEmailId != null && tempPass != null) {
			userobj = registrationService.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if (userobj == null) {
			throw new LoginException("Invalid Credentials or User doesn't exist");
			// throw new Exception("BadCredential/UserDosenot Exist");
		}
		return userobj;
	}

}
