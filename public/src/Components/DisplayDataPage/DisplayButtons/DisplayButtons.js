function DisplayButtons(props) {
    return(
        <div className="buttons-container">
            <button className="display-button" onClick={()=>props.button("map")}>map</button>
            <button className="display-button" onClick={()=>props.button("chart")}>chart</button>
            <button className="display-button" onClick={()=>props.button("table")}>table</button>
            <button className="display-button" onClick={()=>props.button("source")}>source</button>
        </div>
    )
}
export default DisplayButtons