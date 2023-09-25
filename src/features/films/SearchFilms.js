import { useEffect, useState } from "react";
import { FilmsList } from "./FilmsList";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./store";
import { getFilmsSearch } from "./store/filmSearchActions";

export const SearchFilms = () => {
  const dispatch = useDispatch();
  const { films, fetching } = useSelector((state) => state.films);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getFilmsSearch(searchQuery));
  }, [dispatch, searchQuery]);

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
          <p>Завантаження...</p>
        ) : (
          <FilmsList films={films} category="Випадкове" />
        )}
        <Button onClick={() => dispatch(setName())}>Змінити</Button>
      </div>
    </>
  );
};
