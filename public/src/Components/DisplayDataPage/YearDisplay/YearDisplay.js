import { FaPlayCircle } from "@react-icons/all-files/fa/FaPlayCircle";
import { FaPauseCircle } from "@react-icons/all-files/fa/FaPauseCircle";
import {Box,Grid,Slider} from "@material-ui/core"
import {useEffect, useState} from "react";

function YearDisplay() {
    let minValue = 2010
    let maxValue = 2020

    let [value, setValue] = useState(minValue);
    const [isRunning, setIsRunning] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    useEffect(() => {
        if(isRunning) {
            if(value === maxValue){
                setValue(value = minValue)
            }
            const id = window.setInterval(() => {
                setValue(value = value + 1)
                if(value === maxValue){
                    setIsRunning(false)
                }
            }, 200)
            setIntervalId(id)
        }else{
            window.clearInterval(intervalId)
        }
    },[isRunning])

    const handleSliderChange = (event,newValue) => {
        setValue(newValue);
    };

    const changeIsRunning = () => {
        if(isRunning){
            setIsRunning(false)
        }else{
            setIsRunning(true)
        }
    }

    const displayIcon = () => {
        return(
                <>
                    {isRunning ?
                    <FaPauseCircle className="year-display-play-icon"/>
                    :
                    <FaPlayCircle className="year-display-play-icon"/>}
                </>
        )
    }

    return(
        <div className="container" id="year-display-container">
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <button
                            className="year-display-play-button"
                            onClick={(e) => {
                                changeIsRunning()
                            }}
                        >
                            {displayIcon()}
                        </button>
                    </Grid>
                    <Grid item>
                        {value}
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={value}
                            onChange={handleSliderChange}
                            min={minValue}
                            max={maxValue}
                        />
                    </Grid>
                    <Grid item>
                        {maxValue}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default YearDisplay