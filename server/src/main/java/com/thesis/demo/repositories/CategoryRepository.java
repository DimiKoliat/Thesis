package com.thesis.demo.repositories;

import com.thesis.demo.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT c FROM Category c where c.filter = ?1")
    List<Category> findCategoriesByFilter(String filter);
}
