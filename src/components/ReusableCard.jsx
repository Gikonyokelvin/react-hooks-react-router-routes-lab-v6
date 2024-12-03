function Card ({name, movies}) {
    const movieList = movies.map((movie) => <li>{movie}</li>)
    return (
        <article>
            <h2>{name}</h2>
            <ul>{movieList}</ul>
        </article>
    )
}
export default Card;