import React, {useState} from "react";
import DisplayMap from "./TypeOfDisplayData/DisplayMap";
import DisplayChart from "./TypeOfDisplayData/DisplayChart";
import DisplayTable from "./TypeOfDisplayData/DisplayTable";
import DisplaySource from "./TypeOfDisplayData/DisplaySource";
import SingleSelecter from "./Selecters/SingleSelecter";
import MultiSelecter from "./Selecters/MultiSelecter";
import YearDisplay from "../YearDisplay/YearDisplay";

let indicators = []

const charts = [
    { label: 'Line Chart', value: 'LineChart' },
    { label: 'Column Chart', value: 'ColumnChart' },
    { label: 'Scatter Chart', value: 'ScatterChart' },
    { label: 'Area Chart', value: 'AreaChart' },
]

const region = [
    { label: 'World', value: '000' },
    { label: 'Africa', value: '002' },
    { label: 'Europe', value: '150' },
    { label: 'Northern America', value: '021' },
    { label: 'South America', value: '005' },
    { label: 'Asia', value: '142' },
    { label: 'Oceania', value: '009' },
]

function DisplayData(props) {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const onSelect = (selectedList, selectedItem) => {
        selectedCountries.push(selectedItem)
    }

    const onRemove = (selectedList, selectedItem) => {
        const index = selectedCountries.indexOf(selectedItem)
        if(index > -1){
            selectedCountries.splice(index, 1)
        }
        setSelectedCountries(selectedCountries)
    }

    const [selectedChart, setSelectedChart] = useState(charts[0].value);
    const handleChangeChart = (event) => {
        setSelectedChart(event.target.value);
    };

    const [selectedIndicator, setSelectedIndicator] = useState('Selected Indicators');
    const handleChangeIndicator = (event) => {
        setSelectedIndicator(event.target.value);
    };

    const [selectedRegion, setSelectedRegion] = useState(region[0]);
    const handleChangeRegion = (event) => {
        setSelectedRegion(event.target.value);
    };

    function changeArrayToJson(selectedIndicators){
        indicators = []
        selectedIndicators.map((selectedIndicator) => {
            indicators.push({'value': selectedIndicator,'label': selectedIndicator})
        })
    }

    function chooseDisplay() {
        if(props.display === "map"){
            return(
                <div>
                    <div className='select-container'>
                        <SingleSelecter
                            className={'form-select'}
                            selectedValue={selectedRegion}
                            handleChangeSelectedValue={handleChangeRegion}
                            values={region}
                        />
                        <SingleSelecter
                            className={'form-select'}
                            selectedValue={selectedIndicator}
                            handleChangeSelectedValue={handleChangeIndicator}
                            values={indicators}
                        />
                    </div>
                    <DisplayMap
                        data={props.mapData}
                        region={selectedRegion}
                    />
                </div>
            )
        }else if(props.display === "chart"){
            return (
                <div>
                    <MultiSelecter
                        options={props.countries}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        placeholder={"Select Countries"}
                    />
                    <div className='select-container'>
                        <SingleSelecter
                            className={'form-select'}
                            selectedValue={selectedChart}
                            handleChangeSelectedValue={handleChangeChart}
                            values={charts}
                        />
                        <SingleSelecter
                            className={'form-select'}
                            selectedValue={selectedIndicator}
                            handleChangeSelectedValue={handleChangeIndicator}
                            values={indicators}
                        />
                    </div>
                    <DisplayChart data={props.chartsData} selectedChart={selectedChart} />
                </div>
            )
        }else if(props.display === "table"){
            return (
                <div>
                    <MultiSelecter
                        options={props.countries}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        placeholder={"Select Countries"}
                        selectionLimit={4}
                    />

                        <SingleSelecter
                            className={'form-select-table'}
                            selectedValue={selectedIndicator}
                            handleChangeSelectedValue={handleChangeIndicator}
                            values={indicators}
                        />
                    <DisplayTable data={props.tableData}/>
                </div>
            )
        }else if(props.display === "source"){
            return <DisplaySource />
        }else{
            return(<></>)
        }
    }

    return(
        <div className="display-container">
            {changeArrayToJson(props.selectedIndicators)}
            {chooseDisplay()}
            <YearDisplay />
        </div>
    )
}
export default DisplayData