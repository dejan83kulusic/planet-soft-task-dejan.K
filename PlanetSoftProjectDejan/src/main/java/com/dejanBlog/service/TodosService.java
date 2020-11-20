package com.dejanBlog.service;




import org.springframework.ui.Model;

import com.dejanBlog.entity.Todos;


public interface TodosService {

    void addTodos(String name);

    Todos findByName(String name);

    void updateComplated(String name);

    void deleteTodos(String name);

    void findByCompletedAndUserId(Model model);
}
