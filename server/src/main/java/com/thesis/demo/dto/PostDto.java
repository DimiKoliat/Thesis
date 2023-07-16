package com.thesis.demo.dto;

import com.thesis.demo.model.Indicator;

import java.util.List;

public class PostDto {
    private List<Indicator> selectedIndicators;
    private List<Integer> yearsPeriod;
    private int clusters;

    public List<Indicator> getSelectedIndicators() {
        return selectedIndicators;
    }

    public List<Integer> getYearsPeriod() {
        return yearsPeriod;
    }

    public int getClusters() {
        return clusters;
    }

    public void setYearsPeriod(List<Integer> yearsPeriod) {
        this.yearsPeriod = yearsPeriod;
    }
}
