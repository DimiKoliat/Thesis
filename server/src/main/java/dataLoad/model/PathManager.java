package dataLoad.model;

import java.util.HashMap;

public class PathManager {
    private final HashMap<String, String> paths;

    public PathManager(){
        paths = new HashMap<>();
        populatePathsHashMap();
    }

    public void populatePathsHashMap() {
        paths.put("countriesFolderPath", "src/main/resources/csv/countries");
        paths.put("countriesFinalCsvFile", "src/main/resources/csv/final/countries.csv");
        paths.put("indicatorsFinalCsvFile","src/main/resources/csv/final/indicators.csv");
        paths.put("indicatorsFolderPath", "src/main/resources/csv/indicators");
        paths.put("metricsFinalCsvFile", "src/main/resources/csv/final/metrics.csv");
    }

    public String getPath(String type,String state) {
        for (String currentPath: paths.keySet()) {
            if(currentPath.startsWith(type) && currentPath.endsWith(state)){
                return paths.get(currentPath);
            }
        }
        return null;
    }
}
