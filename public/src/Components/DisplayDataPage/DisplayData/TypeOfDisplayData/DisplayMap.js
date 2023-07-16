import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";

function DisplayMap(props) {
    const optionsWithRegion = {
        region: props.region,
        colorAxis: { colors: ["#E98074", "#E85A4F"] },
        backgroundColor: "#EAE7DC",
        datalessRegionColor: "#595958",
        defaultColor: "#ab9494",
    };

    const optionsWithoutRegion = {
        colorAxis: { colors: ["#E98074", "#E85A4F"] },
        backgroundColor: "#EAE7DC",
        datalessRegionColor: "#595958",
        defaultColor: "#ab9494",
    };

    const [selectedOptions,setSelectedOptions] = useState(optionsWithoutRegion)

    useEffect(() => {
        SelectOptions()
    },[props])

    function SelectOptions() {
        if(props.region==='000'){
            setSelectedOptions(optionsWithoutRegion)
        }else{
            setSelectedOptions(optionsWithRegion)
        }
    }

    return (
        <div style={{height: '610px', width: '95%',margin: 'auto'}}>
            <Chart
                options={selectedOptions}
                chartType="GeoChart"
                width="100%"
                height="100%"
                data={props.data}
            />
        </div>
    );
}
export default DisplayMap