package com.thesis.demo.services;

import com.thesis.demo.dto.PostDto;
import com.thesis.demo.model.Metric;
import com.thesis.demo.repositories.MetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostDtoService {
    @Autowired
    MetricRepository metricRepository;

    @Autowired
    MetricService metricService;

    @Autowired
    ProcessService processService;

    @Autowired
    ClusteringService clusteringService;

    public Map<String, List<?>> getMap(PostDto postDto) {
        Map<String,List<?>> map = new HashMap<>();
        processService.setProcess(0);

        int minYear = metricRepository.getMinYearBySelectedIndicators(postDto.getSelectedIndicators());
        int maxYear = metricRepository.getMaxYearBySelectedIndicators(postDto.getSelectedIndicators());

        List<Integer> yearPeriod = new ArrayList<>();
        if(postDto.getYearsPeriod().size()==0){
            yearPeriod.add(minYear);
            yearPeriod.add(maxYear);
            postDto.setYearsPeriod(yearPeriod);
        }else{
            if(maxYear < postDto.getYearsPeriod().get(0)){
                yearPeriod.add(maxYear);
                yearPeriod.add(maxYear);
                postDto.setYearsPeriod(yearPeriod);
            }else if(minYear < postDto.getYearsPeriod().get(0) && maxYear >= postDto.getYearsPeriod().get(0) && maxYear <= postDto.getYearsPeriod().get(1)){
                yearPeriod.add(postDto.getYearsPeriod().get(0));
                yearPeriod.add(maxYear);
                postDto.setYearsPeriod(yearPeriod);
            }else if(minYear >= postDto.getYearsPeriod().get(0) && minYear <= postDto.getYearsPeriod().get(1) && maxYear > postDto.getYearsPeriod().get(1)){
                yearPeriod.add(minYear);
                yearPeriod.add(postDto.getYearsPeriod().get(1));
                postDto.setYearsPeriod(yearPeriod);
            }else if(minYear > postDto.getYearsPeriod().get(1)){
                yearPeriod.add(minYear);
                yearPeriod.add(minYear);
                postDto.setYearsPeriod(yearPeriod);
            }else if(minYear > postDto.getYearsPeriod().get(0) && maxYear < postDto.getYearsPeriod().get(1)){
                yearPeriod.add(minYear);
                yearPeriod.add(maxYear);
                postDto.setYearsPeriod(yearPeriod);
            }
        }
        processService.setProcess(25);
        map.put("yearPeriod", yearPeriod);

        map.put("minYear", Collections.singletonList(minYear));
        map.put("maxYear", Collections.singletonList(maxYear));
        processService.setProcess(50);

        List<List<Metric>> editedMetrics = metricService.editedMetrics(postDto);
        processService.setProcess(75);
        map.put("data",editedMetrics.get(0));
        map.put("countries",new ArrayList<>(
                new LinkedHashSet<>(metricRepository.getCountriesByIndicators(postDto.getSelectedIndicators()))));
        clusteringService.editClusteringResults(metricService.clustering(postDto, editedMetrics,map),postDto,map);
        map.put("data",metricRepository.getMetricByIndicatorAndYearOrderByYear(postDto.getSelectedIndicators()));
        processService.setProcess(100);
        return map;
    }
}
