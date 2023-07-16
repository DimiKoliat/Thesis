package dataLoad.DataTransformerController;

import dataLoad.model.csvHelpers.CsvReader;
import dataLoad.model.csvHelpers.CsvWriter;

public class DataTransformerHandler {
    private CsvWriter csvWriter;
    private CsvReader csvReader;

    private String type;
    private String state;

    private final DataTransformerListsHandler dataTransformerLists;
    private static DataTransformerHandler instance = new DataTransformerHandler();

    public DataTransformerHandler(){
        dataTransformerLists = DataTransformerListsHandler.getInstance();
    }

    public static DataTransformerHandler getInstance() {
        if (instance == null) {
            instance = new DataTransformerHandler();
        }
        return instance;
    }

    public CsvWriter getCsvWriter() {
        return csvWriter;
    }

    public void setCsvWriter(CsvWriter csvWriter) {
        this.csvWriter = csvWriter;
    }

    public CsvReader getCsvReader() {
        return csvReader;
    }

    public void setCsvReader(CsvReader csvReader) {
        this.csvReader = csvReader;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public DataTransformerListsHandler getDataTransformerLists() {
        return dataTransformerLists;
    }
}
