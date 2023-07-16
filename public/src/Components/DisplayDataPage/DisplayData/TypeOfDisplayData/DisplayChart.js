import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import '../../../../index.css'

const options = {
    legend: { position: "bottom", maxLines: 1 },
    lineWidth: 4,
    backgroundColor: "#EAE7DC"
};

const scatterOptions = {
    legend: { position: "bottom", maxLines: 1 },
    backgroundColor: "#EAE7DC",
    pointSize: 10
};

function DisplayChart(props) {
    const [chartOptions, setChartOptions] = useState(options);

    useEffect(() => {
        if(props.selectedChart==="ScatterChart"){
            setChartOptions(scatterOptions)
        }else{
            setChartOptions(options)
        }
    },[props])

    return (
        <div style={{height: '570px', width: '95%',margin: 'auto'}}>
            <div>
                <Chart
                    chartType={props.selectedChart}
                    width="100%"
                    height="560px"
                    data={props.data}
                    options={chartOptions}
                    legendToggle
                />
            </div>
        </div>

    )
}
export default DisplayChart