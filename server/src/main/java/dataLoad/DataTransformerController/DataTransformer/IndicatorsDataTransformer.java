package dataLoad.DataTransformerController.DataTransformer;

import com.opencsv.exceptions.CsvValidationException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class IndicatorsDataTransformer extends DataTransformer {
    private final List<String> indicatorsHelper;

    public IndicatorsDataTransformer(){
        super();
        indicatorsHelper = new ArrayList<>();
    }

    public void transform() throws CsvValidationException, IOException {
        writeCsvHeader("metrics");
        String[] record;
        while((record = getNextRecord()) != null){
            record = headerTransform(record);
            iterateValues(record);
        }
        closeCsvWrite();
    }

    String[] headerTransform(String[] record) throws CsvValidationException, IOException {
        if(record[0].equals("Entity")){
            defineIndicatorsFromHeader(record);
            return getNextRecord();
        }
        return record;
    }

    private void defineIndicatorsFromHeader(String[] record) {
        indicatorsHelper.clear();
        addIndicatorsToList(record);
    }

    private void addIndicatorsToList(String[] record){
        int columnIndex = 3;
        while(record.length != columnIndex){
            indicatorsHelper.add(record[columnIndex]);
            dataTransformerLists.getIndicators().add(record[columnIndex]);
            columnIndex++;
        }
    }

    private void iterateValues(String [] record){
        int columnIndex = 3;
        if(indicatorsHelper.size()>1){
            iterateIndicatorsValues(record,columnIndex);
        }else{
            readLineByLine(record,columnIndex);
        }
    }

    private void iterateIndicatorsValues(String [] record,int columnIndex){
        while(columnIndex-3 != indicatorsHelper.size()){
            readLineByLine(record,columnIndex);
            columnIndex++;
        }
    }

    private void readLineByLine(String[] record,int columnIndex) {
        if(dataTransformerLists.getCountriesCode3Digits().contains(record[1]) && !record[columnIndex].equals("")){
            writeToCsv(getMetricString(record,columnIndex));
        }
    }

    public String[] getMetricString(String[] record,int columnIndex){
        return new String[]{
                String.valueOf(dataTransformerLists.getCountriesCode3Digits().indexOf(record[1])+1),
                record[2],
                String.valueOf(dataTransformerLists.getIndicators().indexOf(indicatorsHelper.get(columnIndex-3))+1),
                String.valueOf(record[columnIndex])
        };
    }
}
