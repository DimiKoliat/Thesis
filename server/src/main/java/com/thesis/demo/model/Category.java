package com.thesis.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Category {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(unique = true)
    private Long id;

    @Column(unique = true,nullable = false)
    private String categoryName;

    @Column(length = 4)
    private String filter;

    public Category(Long id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    public Category(){

    }

    public Long getId() {
        return id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public String getFilter() {
        return filter;
    }
}
