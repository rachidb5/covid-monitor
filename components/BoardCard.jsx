function BoardCard(props){
    return(
        <div className="card-info">
            <h4>{props.name}</h4>
            <span>{props.info}</span>
        </div>
    )
}

export default BoardCard