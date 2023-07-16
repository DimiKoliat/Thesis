package dataLoad.view;

import com.opencsv.exceptions.CsvValidationException;
import dataLoad.DataTransformerController.DataTransformer.DataTransformer;
import dataLoad.DataTransformerController.DataTransformer.DataTransformerFactory;
import dataLoad.DataTransformerController.DataTransformerHandler;
import dataLoad.model.PathManager;
import dataLoad.model.csvHelpers.CsvReader;
import dataLoad.model.csvHelpers.CsvWriter;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException, CsvValidationException {
        Main main = new Main();
        main.startTransform("countries");
        main.startTransform("indicators");
    }

    private final DataTransformerHandler dataTransformerHandler;
    private final PathManager pathManager;

    public Main(){
        dataTransformerHandler = DataTransformerHandler.getInstance();
        pathManager = new PathManager();
    }

    public void startTransform(String dataTransformType) throws IOException, CsvValidationException {
        setUpCsvToTransform(dataTransformType);
        DataTransformerFactory dataTransformerFactory = new DataTransformerFactory();
        DataTransformer dataTransformer = dataTransformerFactory.getDataTransformer(dataTransformType);
        dataTransformer.transform();
        if(dataTransformType.equals("indicators")) {
            writeIndicators(dataTransformer, dataTransformType);
        }
    }

    private void setUpCsvToTransform(String type) throws IOException {
        dataTransformerHandler.setCsvReader(new CsvReader(pathManager.getPath(type,"Path")));
        type = changeType(type);
        setUpCsvToWrite(type);
    }

    private void setUpCsvToWrite(String type) throws IOException {
        dataTransformerHandler.setCsvWriter(new CsvWriter(pathManager.getPath(type,"File")));
    }

    private String changeType(String type){
        if(type.equals("indicators")){
            return "metrics";
        }
        return type;
    }

    private void writeIndicators(DataTransformer dataTransformer,String dataTransformType) throws IOException {
        setUpCsvToWrite(dataTransformType);
        dataTransformer.writeIndicatorsToCsv();
    }
}
