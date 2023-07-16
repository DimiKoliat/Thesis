import React, {useState} from "react";
import Data from "../Data/Data";
import SearchBar from "../Components/SelectIndicatorsPage/SearchBar";
import Filters from "../Components/SelectIndicatorsPage/Filter/Filters";
import Cards from "../Components/SelectIndicatorsPage/Cards/Cards";
import Submit from "../Components/SelectIndicatorsPage/Submit";
import '../index.css'
import ScrollButton from "../Components/SelectIndicatorsPage/ScrollButton";



const SelectIndicatorPage = (props) => {
    const [items, setItems] = useState(Data);
    let [searchText, setSearchText] = useState("");
    return (
        <div className="full-container">
            <div className="main-container">
                <p className="main-container-title">Select Indicators</p>
                <SearchBar
                    setSearchText={setSearchText}
                />
                <Filters
                    filteredCategories={setItems}
                />
                <Cards
                    items={items}
                    searchText={searchText}
                    setSelectedIndicators={props.setSelectedIndicators}
                />
            </div>
            <Submit
                setState={props.setState}
                selectedIndicators={props.selectedIndicators}
            />
            <ScrollButton />
        </div>
    );
};

export default SelectIndicatorPage;
