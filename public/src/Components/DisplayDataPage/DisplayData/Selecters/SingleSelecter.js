import React from "react";

function SingleSelecter(props) {
    return(
        <select
            className={props.className}
            value={props.selectedValue}
            onChange={props.handleChangeSelectedValue}
        >
            {props.values.map((value) => (
                <option
                    className="form-select-options"
                    key={value.value}
                    value={value.value}
                >
                    {value.label}
                </option>
            ))}
        </select>
    )
}
export default SingleSelecter