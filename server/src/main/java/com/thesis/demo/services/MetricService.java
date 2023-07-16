package com.thesis.demo.services;

import com.thesis.demo.dto.PostDto;
import com.thesis.demo.model.Country;
import com.thesis.demo.model.Indicator;
import com.thesis.demo.model.Metric;
import com.thesis.demo.repositories.MetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

import static java.util.stream.Collectors.toList;

@Service
public class MetricService {

    @Autowired
    MetricRepository metricRepository;

    @Autowired
    ProcessService processService;

    @Autowired
    ClusteringService clusteringService;

    public List<List<Metric>> editedMetrics(PostDto postDto){
        List<List<Metric>> editedMetrics = new ArrayList<>();
        for(Indicator indicator:postDto.getSelectedIndicators()){
            editedMetrics.add(metricRepository.getMetricByIndicatorAndYearOrderByYear(indicator));
        }
        return editedMetrics;
    }

    public List<String> clustering(PostDto postDto, List<List<Metric>> metrics,Map<String, List<?>> map){
        return clusteringService.executePythonClusteringScript(getArrayForClustering(prepareDataForClustering(postDto,metrics,map),map),postDto);
    }

    private List<List<Metric>> prepareDataForClustering(PostDto postDto, List<List<Metric>> metrics, Map<String, List<?>> map){
        List<List<Metric>> newMetrics = new ArrayList<>();

        for (List<Metric> list:metrics){
            newMetrics.add(groupMetricsForClustering(postDto,list));
        }

        return newMetrics;
    }

    public List<Metric> groupMetricsForClustering(PostDto postDto, List<Metric> metrics){

        List<Metric> newMetrics = new ArrayList<>();
        sortMetricsByCountry(metrics);
        for (Metric m:metrics) {
            if (m.getYear() >= postDto.getYearsPeriod().get(0) && m.getYear() <= postDto.getYearsPeriod().get(1)) {
                if (newMetrics.size() == 0) {
                    newMetrics.add(m);
                } else {
                    Metric prevMetric = newMetrics.get(newMetrics.size() - 1);
                    if (m.getCountry() == prevMetric.getCountry()) {
                        Metric newMetric = new Metric(
                                m.getCountry(),
                                0,
                                m.getIndicator(),
                                (m.getValue() + prevMetric.getValue()) / 2);
                        newMetrics.remove(newMetrics.size() - 1);
                        newMetrics.add(newMetric);
                    } else {
                        newMetrics.add(m);
                    }
                }
            }
        }
        return newMetrics;
    }

    public ArrayList<ArrayList<Float>> getArrayForClustering(List<List<Metric>> metrics, Map<String, List<?>> map){
        ArrayList<ArrayList<Float>> clusteringData = new ArrayList<>();
        List<Country> clusteringCountries = new ArrayList<>();
        if (metrics.size()==1){
            List<Float> normalizedValues = normalizeData(metrics.get(0));
            int index = 0;
            for (Metric m:metrics.get(0)){
                ArrayList<Float> floats = new ArrayList<>();
                floats.add(normalizedValues.get(index));
                clusteringCountries.add(m.getCountry());
                clusteringData.add(floats);
                index++;
            }
        }else{
            for (List<Metric> list:metrics){
                if(clusteringCountries.size()==0){
                    for (Metric m:list){
                        clusteringCountries.add(m.getCountry());
                    }
                }else{
                    List<Country> newCountriesList = new ArrayList<>();
                    for (Metric m:list){
                        newCountriesList.add(m.getCountry());
                    }
                    clusteringCountries = clusteringCountries.stream().filter(newCountriesList::contains).collect(toList());
                }
            }
            for (List<Metric> list:metrics) {
                List<Float> normalizedValues = normalizeData(list);
                int i = 0;
                int index = 0;
                if (clusteringData.size() == 0) {
                    for (Metric m : list) {
                        if(index<clusteringCountries.size()){
                            if (m.getCountry().getCountryName().equals(clusteringCountries.get(index).getCountryName())) {
                                ArrayList<Float> floats = new ArrayList<>();
                                floats.add(normalizedValues.get(i));
                                clusteringData.add(floats);
                                index++;
                            }
                            i++;
                        }
                    }
                }else{
                    for (Metric m : list) {
                        if(index<clusteringCountries.size()) {
                            if (m.getCountry().getCountryName().equals(clusteringCountries.get(index).getCountryName())) {
                                clusteringData.get(index).add(normalizedValues.get(i));
                                index++;
                            }
                            i++;
                        }
                    }
                }
            }
        }
        map.put("clusteringCountries",clusteringCountries);
        map.put("clusteringData",clusteringData);
        return clusteringData;
    }

    private List<Float> normalizeData(List<Metric> clusteringData) {
        List<Float> normalizedValues = new ArrayList<>();
        List<Float> valuesList = new ArrayList<>();
        for (Metric m:clusteringData){
            valuesList.add(m.getValue());
        }
        float min = findMin(valuesList);
        float max = findMax(valuesList);
        for (Float f:valuesList){
            normalizedValues.add(1-((f-min)/(max-min)));
        }
        return normalizedValues;
    }

    private Float findMax(List<Float> list) {
        if (list == null || list.size() == 0) {
            return Float.MIN_VALUE;
        }
        List<Float> sortedlist = new ArrayList<>(list);
        Collections.sort(sortedlist);
        return sortedlist.get(sortedlist.size() - 1);
    }

    private Float findMin(List<Float> list) {
        if (list == null || list.size() == 0) {
            return Float.MAX_VALUE;
        }
        List<Float> sortedlist = new ArrayList<>(list);
        Collections.sort(sortedlist);
        return sortedlist.get(0);
    }

    private void sortMetricsByCountry(List<Metric> metrics){
        metrics.sort((m1, m2) -> (int) (m1.getCountry().getId() - m2.getCountry().getId()));
    }
}