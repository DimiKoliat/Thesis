package com.thesis.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Country {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(unique = true)
    private Long id;

    @Column(unique = true,nullable=false,length = 100)
    private String countryName;

    @Column(unique = true,nullable=false,length = 2)
    private String countryCodeTwoDigits;

    @Column(unique = true,nullable=false,length = 3)
    private String countryCodeThreeDigits;

    @Column(length = 25)
    private String region;

    @Column(length = 100)
    private String subRegion;

    public Country(Long id, String countryName, String countryCode2Digits, String countryCode3Digits, String region, String subRegion) {
        this.id = id;
        this.countryName = countryName;
        this.countryCodeTwoDigits = countryCode2Digits;
        this.countryCodeThreeDigits = countryCode3Digits;
        this.region = region;
        this.subRegion = subRegion;
    }

    public Country(String countryName, String countryCode2Digits, String countryCode3Digits, String region, String subRegion) {
        this.countryName = countryName;
        this.countryCodeTwoDigits = countryCode2Digits;
        this.countryCodeThreeDigits = countryCode3Digits;
        this.region = region;
        this.subRegion = subRegion;
    }

    public Country() {

    }

    public Long getId() {
        return id;
    }

    public String getCountryName() {
        return countryName;
    }

    public String getCountryCodeTwoDigits() {
        return countryCodeTwoDigits;
    }

    public String getCountryCodeThreeDigits() {
        return countryCodeThreeDigits;
    }

    public String getRegion() {
        return region;
    }

    public String getSubRegion() {
        return subRegion;
    }

    @Override
    public String toString() {
        return "Country{" +
                "id=" + id +
                ", countryName='" + countryName + '\'' +
                ", countryCode2Digits='" + countryCodeTwoDigits + '\'' +
                ", countryCode3Digits='" + countryCodeThreeDigits + '\'' +
                ", region='" + region + '\'' +
                ", subRegion='" + subRegion + '\'' +
                '}';
    }
}
