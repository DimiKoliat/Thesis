import {TextField} from "@material-ui/core";
import React from "react";


function SearchBar(props) {

    return(
        <div className="sub-containers" id="search-bar-container">
            <TextField
                id="searchbar"
                onChange={(event) =>
                    props.setSearchText(event.target.value)}
                variant="filled"
                fullWidth
                label="Search Indicators"
            />
        </div>
    )
}
export default SearchBar