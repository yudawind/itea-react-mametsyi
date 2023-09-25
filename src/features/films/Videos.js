import { useEffect } from "react";
import { FilmsList } from "./FilmsList";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsAction } from "./store/filmActions";

export const Videos = () => {
  const dispatch = useDispatch();
  const { films, fetching } = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [dispatch]);

  return (
    <>
      <div className="col">
        {fetching ? (
          <p>Завантаження...</p>
        ) : (
          <FilmsList films={films} category="Випадкове" />
        )}
      </div>
    </>
  );
};
