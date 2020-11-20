package com.dejanBlog.service;

import com.dejanBlog.entity.User;

public interface UserService {

    void save(User user);

    User findByUsername(String username);

}
