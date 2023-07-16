package com.thesis.demo.dataTransformTest;

import com.opencsv.exceptions.CsvValidationException;
import dataLoad.DataTransformerController.DataTransformerHandler;
import dataLoad.model.PathManager;
import dataLoad.model.csvHelpers.CsvReader;
import dataLoad.model.csvHelpers.CsvWriter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class DataTransformerHandlerTest {
    DataTransformerHandler dataTransformerHandler;
    PathManager pathManager;
    String path;

    @BeforeEach
    void setup(){
        dataTransformerHandler = DataTransformerHandler.getInstance();
        pathManager = new PathManager();
        path = "src/main/resources/csv/test";
    }

    @Test
    @DisplayName("Set type should work.")
    void setTypeTest(){
        setType();
        assertEquals(dataTransformerHandler.getType(),"countries");
    }

    @Test
    @DisplayName("Set state should work.")
    void setSelectedStateTest(){
        setState();
        assertEquals(dataTransformerHandler.getState(),"Path");
    }

    @Test
    @DisplayName("Get correct folder path should work.")
    void getCorrectPathTest(){
        setType();
        setState();
        assertEquals(getPath(),"src/main/resources/csv/countries");
    }

    @Test
    @DisplayName("Csv writer should not be null.")
    void createCsvWriterTest() throws IOException {
        createCsvWriter();
        assertNotNull(dataTransformerHandler.getCsvWriter());
    }

    @Test
    @DisplayName("Csv writer should write current content to csv file.")
    void writeToCsvFileTest() throws CsvValidationException, IOException {
        createCsvWriter();
        dataTransformerHandler.getCsvWriter().writeContent(new String[]{"Country"});
        dataTransformerHandler.getCsvWriter().closeCsvWriter();
        createCsvReader();
        assertEquals(dataTransformerHandler.getCsvReader().readContent()[0],"Country");
    }

    @Test
    @DisplayName("Csv reader should not be null.")
    void createCsvReaderTest() {
        assertNotNull(dataTransformerHandler.getCsvReader());
    }

    @Test
    @DisplayName("Csv reader should read current content from csv file.")
    void readContentFromCsvFile() throws CsvValidationException, IOException {
        createCsvReader();
        assertEquals(dataTransformerHandler.getCsvReader().readContent()[0],"Country");
        dataTransformerHandler.getCsvReader().closeCsvReader();
    }

    private void setType(){
        dataTransformerHandler.setType("countries");
    }

    private void setState(){
        dataTransformerHandler.setState("Path");
    }

    private String getPath(){
        return pathManager.getPath(dataTransformerHandler.getType(),dataTransformerHandler.getState());
    }

    private void createCsvWriter() throws IOException {
        dataTransformerHandler.setCsvWriter(new CsvWriter(path+"/test.csv"));
    }

    private void createCsvReader() throws FileNotFoundException {
        dataTransformerHandler.setCsvReader(new CsvReader(path));
    }
}
