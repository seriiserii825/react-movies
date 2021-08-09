const Movie = (props) => {
    const {Title, Year, Type, Poster} = props.movie;
    return (
        <div className="thumbnail">
            <img src={Poster} alt={Title}/>
            <div className="caption">
                <h3>{Title}</h3>
                <p>
                    <span><strong>Year</strong>: {Year}</span>
                    <span><strong>Type</strong>: {Type}</span>
                </p>
            </div>
        </div>
    )
}

export {Movie}