import MyAccordion from './MyAccordion'
import Buttons from "./CategoriesButtons";
import Data from "../../../Data/Data";
import React, {useState} from "react";

function Filters ({filteredCategories}) {
    let mainCategories = []
    let subCategories = []
    let [mainCategoriesCounter, setMainCategoriesCounter] = useState(0);
    let [subCategoriesCounter, setSubCategoriesCounter] = useState(0);

    function findCategories() {
        Data.map((item) => (item.category.map((categoryName) => {
            if (!mainCategories.includes(categoryName)) {
                if (!subCategories.includes(categoryName)) {
                    if (item.category.indexOf(categoryName) === 0) {
                        mainCategories.push(categoryName)
                    }
                    else {
                        subCategories.push(categoryName)
                    }
                }
            }
        })))
    }

    function findItemsViaCategory(selectedCategories) {
        findCounters(selectedCategories)
        let filteredItems = []
        Data.filter((item) => (
            selectedCategories.map((categoryName) => {
                if(item.category.includes(categoryName)){
                    filteredItems.push(item)
                }
            })
        ))
        setArrayItems(filteredItems)
    }

    function setArrayItems(filteredItems) {
        if(filteredItems.length===0){
            filteredCategories(Data);
        }else{
            filteredCategories(filteredItems);
        }
    }

    function findCounters(selectedCategories) {
        let mainCategoriesCounter = 0;
        let subCategoriesCounter  = 0;
        selectedCategories.map((category) => {
            if(mainCategories.includes(category)){
                mainCategoriesCounter += 1
            }else if(subCategories.includes(category)){
                subCategoriesCounter += 1
            }
        })
        setMainCategoriesCounter(mainCategoriesCounter)
        setSubCategoriesCounter(subCategoriesCounter)
    }

    return (
        <>
            {findCategories()}
            <MyAccordion
                accordionName={"Filters"}
                accordionDetails={
                    <div >
                        <MyAccordion
                            accordionName={"Main categories"}
                            accordionDetails={
                                <Buttons
                                    filteredCategories={findItemsViaCategory}
                                    filtersCategories={mainCategories}
                                />
                            }
                            counter={mainCategoriesCounter}
                        />
                        <MyAccordion
                            accordionName={"Sub categories"}
                            accordionDetails={
                                <Buttons
                                    filteredCategories={findItemsViaCategory}
                                    filtersCategories={subCategories}
                                />
                            }
                            counter={subCategoriesCounter}
                        />
                    </div>
                }
                counter={mainCategoriesCounter+subCategoriesCounter}
                button = {
                    <Buttons
                        filteredCategories={findItemsViaCategory}
                        filtersCategories={["Clear"]}
                    />
                }
            />
        </>
    );
}

export default Filters;