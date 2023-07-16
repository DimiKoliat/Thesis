package com.thesis.demo.model;

import javax.persistence.*;
import java.util.Comparator;

@Entity
@Table
public class Metric {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(unique = true)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL)
    @JoinColumn(name="country_id", referencedColumnName = "id")
    private Country country;

    @Column(nullable=false)
    private int year;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL)
    @JoinColumn(name="indicator_id", referencedColumnName = "id")
    private Indicator indicator;

    @Column(nullable=false)
    private float value;

    public Metric(Country country, int year, Indicator indicator, float value) {
        this.country = country;
        this.year = year;
        this.indicator = indicator;
        this.value = value;
    }

    public Metric() {
    }

    public Long getId() {
        return id;
    }

    public Country getCountry() {
        return country;
    }

    public int getYear() {
        return year;
    }

    public Indicator getIndicator() {
        return indicator;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public void setIndicator(Indicator indicator) {
        this.indicator = indicator;
    }

    @Override
    public String toString() {
        return "Metric{" +
                "id=" + id +
                ", country=" + country +
                ", year=" + year +
                ", indicator='" + indicator + '\'' +
                ", value=" + value +
                '}';
    }
}