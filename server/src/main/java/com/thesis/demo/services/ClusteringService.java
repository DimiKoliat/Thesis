package com.thesis.demo.services;

import com.thesis.demo.dto.PostDto;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class ClusteringService {

    public List<String> executePythonClusteringScript(ArrayList<ArrayList<Float>> data, PostDto postDto) {
        createFileWithClusteringData(data);
                  try{
            Process process = startProcess(postDto.getClusters(),postDto.getSelectedIndicators().size());
            printPythonErrors(new BufferedReader(new InputStreamReader(process.getErrorStream())));
            return convertPythonReturnToList(getPythonReturnString(new BufferedReader(new InputStreamReader(process.getInputStream()))));
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    private Process startProcess(int clusters,int size) throws IOException {
        ProcessBuilder processBuilder = new ProcessBuilder("python",
                System.getProperty("user.dir") + "\\src\\main\\java\\com\\thesis\\demo\\pythonScripts\\kMeansClustering.py" ,
                String.valueOf(clusters) , String.valueOf(size));
        return processBuilder.start();
    }

    private void createFileWithClusteringData(ArrayList<ArrayList<Float>> data){
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter("src/main/resources/txt/dataForClustering.txt"));
            writer.write(convertArrayToString(data));
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String convertArrayToString(ArrayList<ArrayList<Float>> data){
        String returnString = "";
        for (ArrayList<Float> arrayList:data){
            for (Float f:arrayList){
                returnString += f + ",";
            }
        }
        return returnString;
    }

    private StringBuilder getPythonReturnString(BufferedReader reader) throws IOException {
        StringBuilder returnString = new StringBuilder();
        String lines;
        while((lines=reader.readLine())!=null){
            returnString.append(lines);
        }
        System.out.println(returnString);
        return returnString;
    }

    private List<String> convertPythonReturnToList(StringBuilder returnString){
        return List.of((returnString.toString().split("=")));
    }

    private void printPythonErrors(BufferedReader readers) throws IOException {
        String lines;
        while((lines=readers.readLine())!=null){
            System.out.println("Error lines "+lines);
        }
    }

    public Map<String, List<?>> editClusteringResults(List<String> clusteringResults, PostDto postDto, Map<String, List<?>> map){
        String clusters = clusteringResults.get(0);
        clusters = clusters.substring(2, clusters.length() - 4);
        List<String> listOfClusters = List.of(clusters.split(","));
        List<List<Float>> clustersList = new ArrayList<>();
        int counter = 0;
        List<Float> helper = new ArrayList<>();
        for (String s:listOfClusters){
            if(postDto.getSelectedIndicators().size() == counter){
                clustersList.add(helper);
                helper = new ArrayList<>();
                counter = 0;
            }
            helper.add(Float.valueOf(s));
            counter++;
        }
        clustersList.add(helper);

        String labels = clusteringResults.get(1);
        labels = labels.substring(4, labels.length() - 2);
        List<String> listOfLabels = List.of(labels.split(","));
        List<Integer> labelsList = new ArrayList<>();
        for (String s:listOfLabels){
            labelsList.add(Integer.valueOf(s));
        }

        map.put("labels",labelsList);
        map.put("clusters",clustersList);

        return map;
    }
}
