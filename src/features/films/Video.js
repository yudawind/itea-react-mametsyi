import { useEffect, useState } from "react";
import { apiVideo } from "./api";
import { useSelectedFilmIds } from "./components/SelectedFilmIdsProvider";
import { CardFilm } from "../components/CardFilm";

export const Video = () => {
  const [videos, setVideos] = useState([]);
  const { selectedFilmIds, addSelectedFilmId, removeSelectedFilmId } =
    useSelectedFilmIds();

  const handleLikeClick = (filmId) => {
    if (selectedFilmIds.includes(filmId)) {
      removeSelectedFilmId(filmId);
    } else {
      addSelectedFilmId(filmId);
    }
  };

  const getVideo = async (id) => {
    try {
      const { results } = await apiVideo.getVideo(id);
      // console.log(results);
      return results;
    } catch (e) {
      // console.log(e);
      return null;
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const videoResults = await Promise.all(
        selectedFilmIds.map((id) => getVideo(id))
      );
      const filteredVideos = videoResults.filter((video) => video !== null);
      setVideos(filteredVideos);
    };

    fetchVideos();
  }, [selectedFilmIds]);

  if (selectedFilmIds.length === 0) {
    return <p>Обрані фільми відсутні.</p>;
  }

  return (
    <div className="row row-wrap">
      {videos.map((film, index) => (
        <div key={film.id}>
          <CardFilm
            film={film}
            onLikeClick={handleLikeClick}
            isLiked={selectedFilmIds.includes(film.id)}
          />
        </div>
      ))}
    </div>
  );
};
