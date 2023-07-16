import Multiselect from "multiselect-react-dropdown";
import React from "react";

function MultiSelecter(props) {
    return(
        <Multiselect
            options={props.options}
            onSelect={props.onSelect}
            onRemove={props.onRemove}
            isObject={false}
            avoidHighlightFirstOption={true}
            showCheckbox={true}
            selectionLimit={props.selectionLimit}
            placeholder={props.placeholder}
            style={{
                chips: {
                    background: "var(--secondary-color)",
                    color: "white",
                },
                searchBox: {
                    border: "var(--border)",
                },
                optionContainer: {
                    background: "var(--bg-secondary-color)",
                }
            }}
        />
    )
}
export default MultiSelecter