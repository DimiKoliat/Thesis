package com.thesis.demo.controller;

import com.thesis.demo.model.Category;
import com.thesis.demo.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/categories/")
public class CategoriesController {

    @Autowired
    CategoryRepository categoryRepository;


    @GetMapping(path = "/{filter}")
    List<Category> getFilterCategories(@PathVariable String filter){
        return categoryRepository.findCategoriesByFilter(filter);
    }
}
