package com.thesis.demo.dataTransformTest;

import dataLoad.DataTransformerController.DataTransformer.CountriesDataTransformer;
import dataLoad.DataTransformerController.DataTransformer.DataTransformer;
import dataLoad.DataTransformerController.DataTransformer.DataTransformerFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class DataTransformerTest {

    DataTransformer dataTransformer;

    @BeforeEach
    void setup(){
        dataTransformer = new DataTransformerFactory().getDataTransformer("countries");
    }

    @Test
    @DisplayName("Not null object should be created from factory")
    void factoryCreateObjectTest() {
        assertNotNull(dataTransformer);
    }

    @Test
    @DisplayName("Should return correct header.")
    void getHeaderTest(){
        String[] header = dataTransformer.getHeader("countries");
        String[] string = new String[]{"Country","CountryCodeTwoDigits","CountryCodeThreeDigits","Region","SubRegion"};
        assertEquals(header[0],string[0]);
        assertEquals(header[1],string[1]);
        assertEquals(header[2],string[2]);
        assertEquals(header[3],string[3]);
        assertEquals(header[4],string[4]);
    }

    @Test
    @DisplayName("Data transform countries should work.")
    void testDataTransformCountries(){
        CountriesDataTransformer countriesDataTransformer = new CountriesDataTransformer();
        String [] editedRecord = countriesDataTransformer.readLineByLine(
                new String[]{"Afghanistan","AF","AFG","004","ISO 3166-2:AF","Asia","Southern Asia","","142","034",""});
        assertEquals(editedRecord[0],"Afghanistan");
        assertEquals(editedRecord[1],"AF");
        assertEquals(editedRecord[2],"AFG");
        assertEquals(editedRecord[3],"Asia");
        assertEquals(editedRecord[4],"Southern Asia");
    }
}
