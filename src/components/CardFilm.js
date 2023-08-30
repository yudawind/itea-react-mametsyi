export const CardFilm = ({film}) => {
    return (
        <div className="card">
            <img src={film.poster_path} alt="poster" />
            <div className="card-body">
                <h3>{film.title}</h3>
                <p>{film.overview}</p>
            </div>
        
        </div>
    )
}