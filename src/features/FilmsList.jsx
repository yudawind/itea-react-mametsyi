import styled from "styled-components";
import { CardFilm } from "./goods/components/CardFilm";
import { useSelectedFilmIds } from "./videos/components/SelectedFilmIdsProvider";

const StyledH2 = styled.h2`
    color: #141414;
    font-family: 'Roboto', sans-serif;
`

export const FilmsList = ({films,cat}) => {
    const { selectedFilmIds, addSelectedFilmId, removeSelectedFilmId } = useSelectedFilmIds();

    const handleLikeClick = (filmId) => {
        if (selectedFilmIds.includes(filmId)) {
            
            removeSelectedFilmId(filmId);
          } else {
            addSelectedFilmId(filmId);
          }
      };

    return (
        <div className="col">
                <StyledH2>{cat}</StyledH2>
                <div className="row row-wrap">
                    {films.map((film) => 
                    <div key={film.id}>
                        <CardFilm film={film} onLikeClick={handleLikeClick} isLiked={selectedFilmIds.includes(film.id)} />
                    </div>
                )}
                </div>
                
        </div>
    )

}