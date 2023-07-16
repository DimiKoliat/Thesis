package dataLoad.DataTransformerController.DataTransformer;

import com.opencsv.exceptions.CsvValidationException;
import dataLoad.DataTransformerController.DataTransformerHandler;
import dataLoad.DataTransformerController.DataTransformerListsHandler;
import dataLoad.model.HeaderManager;

import java.io.IOException;

public abstract class DataTransformer {
    DataTransformerHandler dataTransformerHandler;
    DataTransformerListsHandler dataTransformerLists;

    public DataTransformer(){
        dataTransformerHandler = DataTransformerHandler.getInstance();
        dataTransformerLists = dataTransformerHandler.getDataTransformerLists();
    }

    void writeCsvHeader(String type){
        dataTransformerHandler.getCsvWriter().writeContent(getHeader(type));
    }

    String[] getNextRecord() throws CsvValidationException, IOException {
        return dataTransformerHandler.getCsvReader().readContent();
    }

    public String[] getHeader(String type){
        HeaderManager headerManger = new HeaderManager();
        return headerManger.getHeader(type);
    }

    void writeToCsv(String[] record){
        if(record != null){
            dataTransformerHandler.getCsvWriter().writeContent(record);
        }
    }

    void closeCsvWrite() throws IOException {
        dataTransformerHandler.getCsvWriter().closeCsvWriter();
    }

    public void writeIndicatorsToCsv() throws IOException {
        writeCsvHeader("indicators");
        for (String indicators: dataTransformerLists.getIndicators()){
            writeToCsv(new String[]{indicators});
        }
        dataTransformerHandler.getCsvWriter().closeCsvWriter();
    }

    public abstract void transform() throws CsvValidationException, IOException;
}
