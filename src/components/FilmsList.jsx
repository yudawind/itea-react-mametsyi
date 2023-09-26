import styled from "styled-components";
import { useSelectedFilmIds } from "../features/films/components/SelectedFilmIdsProvider";
import { CardFilm } from "./CardFilm";

const StyledH2 = styled.h2`
  color: #141414;
  font-family: "Roboto", sans-serif;
`;

export const FilmsList = ({ films, category }) => {
  const { selectedFilmIds, addSelectedFilmId, removeSelectedFilmId } =
    useSelectedFilmIds();

  const handleLikeClick = (filmId) => {
    if (selectedFilmIds.includes(filmId)) {
      removeSelectedFilmId(filmId);
    } else {
      addSelectedFilmId(filmId);
    }
  };

  return (
    <div className="col">
      <StyledH2>{category}</StyledH2>
      <div className="row row-wrap">
        {films.map((film) => (
          <div key={film.id}>
            <CardFilm
              film={film}
              onLikeClick={handleLikeClick}
              isLiked={selectedFilmIds.includes(film.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
