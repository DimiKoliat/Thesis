package dataLoad.model;

import java.util.HashMap;
import java.util.Objects;

public class HeaderManager {
    private final HashMap<String, String []> headers;

    public HeaderManager(){
        headers = new HashMap<>();
        populateHeadersHashMap();
    }

    private void populateHeadersHashMap() {
        headers.put("countries", new String[]{"Country","CountryCodeTwoDigits","CountryCodeThreeDigits","Region","SubRegion"});
        headers.put("metrics", new String[]{"CountryId","Year","IndicatorId","value"});
        headers.put("indicators", new String[]{"Indicator"});
    }

    public String[] getHeader(String type) {
        for (String currentHeader: headers.keySet()) {
            if(Objects.equals(currentHeader, type)){
                return headers.get(currentHeader);
            }
        }
        return null;
    }
}
