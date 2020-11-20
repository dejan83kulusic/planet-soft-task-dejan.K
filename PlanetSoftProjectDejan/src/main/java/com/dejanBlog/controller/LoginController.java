package com.dejanBlog.controller;

import java.io.Serializable;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class LoginController implements Serializable {

	  @RequestMapping(value = {"/"})
	    public String home(){
	        return "login";
	    }

	    @RequestMapping(value = {"/login"})
	    public ModelAndView login(@RequestParam(value = "error", required = false) String error,
	                       @RequestParam(value = "logout", required = false) String logout) {

	        ModelAndView model = new ModelAndView();
	        if (error != null) {
	            model.addObject("error", "Invalid username and password!");
	        }

	        if (logout != null) {
	            model.addObject("msg", "You've been logged out successfully.");
	        }
	        model.setViewName("login");

	        return model;
	    }

	}
