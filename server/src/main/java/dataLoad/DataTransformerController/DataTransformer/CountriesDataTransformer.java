package dataLoad.DataTransformerController.DataTransformer;

import com.opencsv.exceptions.CsvValidationException;

import java.io.IOException;

public class CountriesDataTransformer extends DataTransformer {

    public CountriesDataTransformer(){
        super();
    }

    public void transform() throws CsvValidationException, IOException {
        writeCsvHeader("countries");
        String[] record;
        while((record = getNextRecord()) != null){
            record = headerTransform(record);
            writeToCsv(readLineByLine(record));
        }
        closeCsvWrite();
    }

    String[] headerTransform(String[] record) throws CsvValidationException, IOException {
        if(record[0].equals("Country")){
            return getNextRecord();
        }
        return record;
    }

    public String[] readLineByLine(String[] record) {
        addRecordToList(record);
        return new String[]{record[0],record[1],record[2],record[5],record[6]};
    }

    private void addRecordToList(String[] record){
        dataTransformerLists.getCountries().add(record[0]);
        dataTransformerLists.getCountriesCode2Digits().add(record[1]);
        dataTransformerLists.getCountriesCode3Digits().add(record[2]);
        dataTransformerLists.getCountriesRegion().add(record[5]);
        dataTransformerLists.getCountriesSubRegion().add(record[6]);
    }
}
