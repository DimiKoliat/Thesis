function Submit(props) {
    return(
        <div className="submit" id="submit" style={{display: "none"}}>
            <button className="button"
                    id="submit-button"
                    onClick={() => {
                        props.setState('DisplayDataPage')
                    }}
            >
                submit
            </button>
        </div>
    )
}
export default Submit;