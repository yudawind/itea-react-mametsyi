import { useEffect, useState } from "react";
import { apiVideos } from "./api";
import { FilmsList } from "./FilmsList";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./store";
import { getFilmsAction } from "./store/filmActions";

export const Videos = () => {
  const dispatch = useDispatch();
  const { films, fetching } = useSelector((state) => state.films);

  // const [videos, setVideos] = useState([]);
  // const [filteredVideos, setFilteredVideos] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  // const getVideos = async () => {
  //   try {
  //     const { results } = await apiVideos.getVideos();
  //     setVideos(results);
  //     setFilteredVideos(results);

  //     // console.log(results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    dispatch(getFilmsAction());
    // getVideos();
  }, []);

  // const handleSearch = () => {
  //   const query = searchQuery.toLowerCase();
  //   const filtered = videos.filter((video) =>
  //     video.titleText.text.toLowerCase().includes(query)
  //   );
  //   setFilteredVideos(filtered);
  // };

  return (
    <>
      <div className="col">
        {/* <input
          type="text"
          placeholder="Пошук відео"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
        {/* <Button onClick={handleSearch}>Пошук</Button> */}
        {/* <FilmsList films={filteredVideos} category="Випадкове" /> */}
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
