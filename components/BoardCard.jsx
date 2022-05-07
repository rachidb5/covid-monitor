function BoardCard(props){
    return(
        <div className="card">
            <h4>{props.name}</h4>
            <span>{props.info}</span>
        </div>
    )
}

export default BoardCard