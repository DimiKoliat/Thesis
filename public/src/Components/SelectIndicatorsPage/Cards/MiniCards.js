import CleatIcon from '@material-ui/icons/Clear';
import React, {useEffect, useState} from "react";

let cards = []

function MiniCards(props){

    function useForceUpdate(){
        const [, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        getMiniCards(props.selectedCard)
        forceUpdate()
    },[props.selectedCard,props.clickEvent])


    function getMiniCards(card) {
        if(card != null){
            manageList(card)
        }
        return(
            cards.map((card) =>
                getMiniCard(card)
            )
        )
    }

    function manageList(card) {
        if(card!=null){
            if(cards.indexOf(card)>-1){
                cards.splice(cards.indexOf(card), 1);
            }else{
                cards.push(card)
            }
            props.setSelectedCards(cards)
            displaySubmit()
            displayMiniCards()
            return cards
        }
    }

    function displayMiniCards() {
        let div = document.getElementById("mini-cards-container");
        if(cards.length>0){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }

    function getMiniCard(card) {
        return(
            <div className="sub-containers" id="mini-card" key={card}>
                <p className="mini-card-name">{card}</p>
                <button
                    className="mini-card-clear-button"
                    onClick={()=>{
                        getMiniCards(card)
                        forceUpdate()
                    }}
                >
                    <CleatIcon className="clear-icon"/>
                </button>
            </div>
        )
    }

    function displaySubmit() {
        let div = document.getElementById("submit");
        if(cards.length>0){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }
    
    function SelectClearIndicatorsButton() {
        cards=[]
        props.setSelectedCards(cards)
        displaySubmit()
        forceUpdate()
        document.getElementById("mini-cards-container")
            .style.display="none";
    }

    return(
        <div className="sub-containers" id="mini-cards-container" style={{display: "none"}}>
            <div className="name-counter-button" id="name-counter-button-mini-cards">
                <div className="name-counter">
                    <p className="name" id="name">
                        Indicators
                    </p>
                    <p className="counter" id="counter">
                        Selected indicators({cards.length}
                        {cards.length > 1 ? " indicators" : " indicator"})
                    </p>
                </div>
                <button className="button" id="selected-indicator-clear-button"
                        onClick={() => {
                            SelectClearIndicatorsButton()
                        }}
                >
                    Clear
                </button>
            </div>
            {getMiniCards(null)}
        </div>
    );
}
export default MiniCards;