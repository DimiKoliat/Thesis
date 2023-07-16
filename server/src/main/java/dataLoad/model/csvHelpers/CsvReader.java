package dataLoad.model.csvHelpers;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class CsvReader {
    private CSVReader csvReader;
    private final File[] files;
    private int index;

    public CsvReader(String directorPath) throws FileNotFoundException {
        index = 0;
        this.files=getFilesFromDirector(directorPath);
        this.csvReader=createCsvReader(files[index]);
    }

    private CSVReader createNextFileCsvReader() throws FileNotFoundException {
        index++;
        if(index==files.length){
            return null;
        }
        return createCsvReader(files[index]);
    }

    private File[] getFilesFromDirector(String directorPath){
        return new File(directorPath).listFiles();
    }

    private CSVReader createCsvReader(File csvFile) throws FileNotFoundException {
        return new CSVReader(new FileReader(csvFile));
    }

    public String[] readContent() throws CsvValidationException, IOException {
        String[] record = csvReader.readNext();
        if(record==null){
            this.csvReader=createNextFileCsvReader();
            if(this.csvReader==null){
                return null;
            }
            record = csvReader.readNext();
        }
        return record;
    }

    public void closeCsvReader() throws IOException {
        csvReader.close();
    }
}
