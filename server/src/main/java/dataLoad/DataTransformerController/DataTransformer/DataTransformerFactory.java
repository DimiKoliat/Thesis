package dataLoad.DataTransformerController.DataTransformer;

import java.util.HashMap;
import java.util.Objects;

public class DataTransformerFactory {
    private final HashMap<String, DataTransformer> dataTransformers;

    public DataTransformerFactory() {
        dataTransformers = new HashMap<>();
        createAllDataTransformers();
    }

    public void createAllDataTransformers() {
        dataTransformers.put("countries", new CountriesDataTransformer());
        dataTransformers.put("indicators", new IndicatorsDataTransformer());
    }

    public DataTransformer getDataTransformer(String type) {
        for (String currentDataTransformer: dataTransformers.keySet()) {
            if(Objects.equals(currentDataTransformer, type)){
                return dataTransformers.get(currentDataTransformer);
            }
        }
        return null;
    }
}