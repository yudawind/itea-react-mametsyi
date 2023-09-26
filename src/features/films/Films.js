/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FilmsList } from "../../components/FilmsList";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsAction } from "./store/filmActions";

export const Films = () => {
  const dispatch = useDispatch();
  const { films, fetching } = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilmsAction());
  }, []);

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
