package dataLoad.DataTransformerController;

import java.util.ArrayList;
import java.util.List;

public class DataTransformerListsHandler {
    private final List<String> indicators;
    private final List<String> countries;
    private final List<String> countriesCode2Digits;
    private final List<String> countriesCode3Digits;
    private final List<String> countriesRegion;
    private final List<String> countriesSubRegion;
    private static DataTransformerListsHandler instance = new DataTransformerListsHandler();

    DataTransformerListsHandler(){
        indicators = new ArrayList<>();
        countries = new ArrayList<>();
        countriesCode2Digits = new ArrayList<>();
        countriesCode3Digits = new ArrayList<>();
        countriesRegion = new ArrayList<>();
        countriesSubRegion = new ArrayList<>();
    }

    public static DataTransformerListsHandler getInstance() {
        if (instance == null) {
            instance = new DataTransformerListsHandler();
        }
        return instance;
    }

    public List<String> getIndicators() {
        return indicators;
    }

    public List<String> getCountries() {
        return countries;
    }

    public List<String> getCountriesCode2Digits() {
        return countriesCode2Digits;
    }

    public List<String> getCountriesCode3Digits() {
        return countriesCode3Digits;
    }

    public List<String> getCountriesRegion() {
        return countriesRegion;
    }

    public List<String> getCountriesSubRegion() {
        return countriesSubRegion;
    }
}
