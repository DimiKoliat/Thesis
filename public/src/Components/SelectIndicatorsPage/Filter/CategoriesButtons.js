let selectedCategories = []
let allButtonsID = []

function getButtonsContainer(filteredCategories,filtersCategories){
    return (
        <div className="filter-buttons-container">
            {createButtons(filteredCategories,filtersCategories)}
        </div>
    )
}

function createButtons(filteredCategories,filtersCategories){
    return(
        filtersCategories.map((filterCategory) => (
            findAllButtons(filterCategory),
                appearButton(filteredCategories,filterCategory)
        ))
    )
}

function findAllButtons(category){
    if (!allButtonsID.includes(category)) {
        allButtonsID.push(category)
    }
}

function appearButton(filteredCategories,filterCategory){
    return(
        <button
            className="button"
            onClick={(event) => {
                if(filterCategory==="Clear"){
                    filteredCategories(addToSelectedCategories([]))
                    clearSelectedButtons()
                    event.stopPropagation()
                }else{
                    filteredCategories(addToSelectedCategories(filterCategory))
                }
            }}
            id={filterCategory}
            key={filterCategory}
        >
            {filterCategory}
        </button>
    )
}

function addToSelectedCategories(filterCategory) {
    if(filterCategory.length === 0) {
        selectedCategories = []
    }else{
        let button = document.getElementById(filterCategory)
        if(selectedCategories.includes(filterCategory)) {
            const index = selectedCategories.indexOf(filterCategory)
            selectedCategories.splice(index, 1)
            button.style.fontWeight = "normal"
            button.style.backgroundColor = "#E85A4F"
        }
        else
        {
            selectedCategories.push(filterCategory)
            button.style.backgroundColor = "#e52618"
            button.style.fontWeight = "bold"
        }
    }
    return selectedCategories;
}

function clearSelectedButtons() {
    allButtonsID.map((buttonID) => {
        document.getElementById(buttonID).style.backgroundColor = "#E85A4F"
        document.getElementById(buttonID).style.fontWeight = "normal"
    })
}

function Buttons (props){
    return (
        <>
            {getButtonsContainer(props.filteredCategories,props.filtersCategories)}
        </>
    );
}

export default Buttons;