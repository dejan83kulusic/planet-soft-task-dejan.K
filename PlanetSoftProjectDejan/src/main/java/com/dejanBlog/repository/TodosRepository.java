package com.dejanBlog.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dejanBlog.entity.Todos;

public interface TodosRepository extends CrudRepository<Todos, Long> {

    Todos findByName(String name);

    List<Todos> findByCompletedAndUserId(boolean complated, Long Id);
   
}
