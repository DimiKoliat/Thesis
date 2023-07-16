package com.thesis.demo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
public class Indicator {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(unique = true)
    private Long id;

    @Column(nullable=false)
    private String indicatorName;

    @Column(unique = true)
    private String indicatorLabel;

    @Lob
    private String description;

    @ManyToMany
    @JoinTable(
            name = "categorized_indicators",
            joinColumns = @JoinColumn(name = "indicator_id"))
    @OrderBy("id")
    private Set<Category> categories;

    public Indicator(Long id, String indicatorName, String indicatorLabel, String description) {
        this.id = id;
        this.indicatorName = indicatorName;
        this.indicatorLabel = indicatorLabel;
        this.description = description;
    }

    public Indicator(){

    }

    public Long getId() {
        return id;
    }

    public String getIndicatorName() {
        return indicatorName;
    }

    public String getIndicatorLabel() {
        return indicatorLabel;
    }

    public String getDescription() {
        return description;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    @Override
    public String toString() {
        return "Indicator{" +
                "id=" + id +
                ", indicatorName='" + indicatorName + '\'' +
                ", indicatorLabel='" + indicatorLabel + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
