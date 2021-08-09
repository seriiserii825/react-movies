import {Movie} from "./Movie";

const Movies = (props) => {
    const {movies = []} = props;

    return (
        <div className="movies">
            <div className="container">
                <ul>
                    {movies.length ? movies.map(movie => {
                        return (
                            <li key={movie.imdbID}>
                                <Movie movie={{...movie}}/>
                            </li>
                        )
                    }) : (<h2>Nothing not found...</h2>)}
                </ul>
            </div>
        </div>
    )
}

export {Movies}
