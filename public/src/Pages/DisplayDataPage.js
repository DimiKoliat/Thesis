import DisplayButtons from "../Components/DisplayDataPage/DisplayButtons/DisplayButtons";
import DisplayData from "../Components/DisplayDataPage/DisplayData/DisplayData";
import {useState} from "react";
import tableData from '../Components/DisplayDataPage/Data/TableData'
import "../index.css"

const mapData = [
    ["Country", "Popularity","asdf"],
    ["Germany", 200, 200],
    ["United States", 300, 200],
    ["Brazil", 400, 200],
    ["Canada", 500, 200],
    ["France", 600, 200],
    ["RU", 2000, 200],
];

const chartsData = [
    ["Country", "Germany","United States","Brazil","Canada","France","Russia"],
    ["2000", 200, 200, 200, 200, 200, 200],
    ["2001", 300, 200, 200, 200, 2900, 200],
    ["2002", 400, 2006, 200, 200, 200, 200],
    ["2003", 500, 2070, 2030, 200, 200, 200],
    ["2004", 600, 2030, 200, 2000, 200, 200],
    ["2005", 2000, 2900, 200, 2500, 200, 200],
    ["2006", 2000, 2900, 200, 2500, 200, 200],
];

const countries = ['Greece','Germany','England','France','Italy' ]

function DisplayDataPage(props) {
    const [display,setDisplay] = useState("map");

    return(
        <div className="full-container">
            <div className="main-container" id="main-container">
                <DisplayData
                    display={display}
                    selectedIndicators={props.selectedIndicators}
                    mapData={mapData}
                    countries={countries}
                    tableData={tableData}
                    chartsData={chartsData}
                />
                <DisplayButtons button={setDisplay}/>
            </div>
        </div>
    )
}
export default DisplayDataPage;

