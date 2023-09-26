/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FilmsList } from "./containers/FilmsList";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsSearch } from "./store/filmSearchActions";

export const SearchFilms = () => {
  const dispatch = useDispatch();
  const { films, fetching } = useSelector((state) => state.films);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getFilmsSearch(searchQuery));
  }, [searchQuery]);

  return (
    <>
      <div className="col">
        <input
          type="text"
          placeholder="Пошук відео"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {fetching ? (
          <p>Пошук...</p>
        ) : (
          <FilmsList films={films} category="Знайдене" />
        )}
      </div>
    </>
  );
};
