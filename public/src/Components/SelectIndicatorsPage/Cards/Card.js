function Card (props) {
    return (
        <div className="sub-containers" id="card" key={props.item.id}
             onClick={(event) => {
                 props.setSelectedCard(props.item.name)
                 props.clickEvent(event)
             }}>
            <div className="card-content">
                <div className="card-name">
                    {props.item.name}
                </div>
                <p className="card-description">
                    {props.item.description}
                </p>
                <div className="card-categories">
                    {props.item.category.map((category) => (
                        <span className="card-category" key={category}>
                        #{category.split(' ').join('_')}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;