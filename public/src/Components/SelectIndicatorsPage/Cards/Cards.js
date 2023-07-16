import Card from "./Card";
import React, {useState} from "react";
import MiniCards from "./MiniCards";

function Cards(props){
    const [selectedCard, setSelectedCard] = useState(null);
    const [clickEvent, setClickEvent] = useState(null);

    function isIncludedViaSearch (items,searchText){
        searchText=searchText.toLowerCase()
        return items.name.toLowerCase().includes(searchText)
            || isIncludedInSearchedCategory(items,searchText)
    }

    function isIncludedInSearchedCategory(items,searchText){
        let isIncluded= false
        items.category.map((category) => {
            if(category.toLowerCase().includes(searchText)){
                isIncluded = true
            }
        })
        return isIncluded
    }

    return(
        <>
            <MiniCards selectedCard={selectedCard}
                       clickEvent={clickEvent}
                       setSelectedCards={props.setSelectedIndicators}
            />
            <div className="cards-container">
                {props.items.filter((items) => {
                    if (props.searchText === "") {
                        return items
                    } else if (isIncludedViaSearch(items,props.searchText)) {
                        return items
                    }
                }).map((item,id) => {
                    return (
                        <Card
                            item={item}
                            key={id}
                            clickEvent={setClickEvent}
                            setSelectedCard={setSelectedCard}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Cards;