import {useState} from "react";
import SelectIndicatorsPage from "./SelectIndicatorsPage";
import DisplayDataPage from "./DisplayDataPage";

function HomePage() {
    const [state,setState] = useState('selectIndicatorsPage')
    const [selectedIndicators, setSelectedIndicators] = useState([]);

    function displayState() {
        if(state === 'selectIndicatorsPage'){
            return <SelectIndicatorsPage
                setState={setState}
                selectedIndicators={selectedIndicators}
                setSelectedIndicators={setSelectedIndicators}
            />
        }else if(state === 'DisplayDataPage'){
            return <DisplayDataPage
                selectedIndicators={selectedIndicators}
            />
        }else{
            return <></>
        }
    }
    return (
        <div>
            {displayState()}
        </div>)
}
export default HomePage