import { useEffect } from "react";
import { FilmsList } from "./FilmsList";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./store";
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
        <Button onClick={() => dispatch(setName())}>Змінити</Button>
      </div>
    </>
  );
};
