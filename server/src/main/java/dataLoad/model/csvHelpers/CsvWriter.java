package dataLoad.model.csvHelpers;

import com.opencsv.CSVWriter;
import java.io.FileWriter;
import java.io.IOException;

public class CsvWriter {
    private final CSVWriter csvWriter;

    public CsvWriter(String csvFilePath) throws IOException {
        this.csvWriter = createCsvWriter(csvFilePath);
    }

    private CSVWriter createCsvWriter(String csvFilePath) throws IOException {
        return new CSVWriter(new FileWriter(csvFilePath),
                CSVWriter.DEFAULT_SEPARATOR,
                CSVWriter.NO_QUOTE_CHARACTER,
                CSVWriter.DEFAULT_ESCAPE_CHARACTER,
                CSVWriter.RFC4180_LINE_END);
    }

    public void writeContent(String[] content){
        csvWriter.writeNext(content);
    }

    public void closeCsvWriter() throws IOException {
        csvWriter.close();
    }
}
