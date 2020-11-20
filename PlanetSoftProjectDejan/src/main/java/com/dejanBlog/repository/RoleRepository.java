package com.dejanBlog.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dejanBlog.entity.Role;
@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {

    List<Role> findAll();
    Role findByRolename(String name);
}
