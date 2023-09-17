import { useEffect, useState } from "react";
import { apiVideos } from "./api";
import { FilmsList } from "./FilmsList";
import { Button } from "../../components/Button/Button";

export const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getVideos = async () => {
    try {
      const { results } = await apiVideos.getVideos();
      setVideos(results);
      setFilteredVideos(results);

      // console.log(results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = videos.filter((video) =>
      video.titleText.text.toLowerCase().includes(query)
    );
    setFilteredVideos(filtered);
  };

  return (
    <>
      <div className="col">
        <input
          type="text"
          placeholder="Пошук відео"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Пошук</Button>
        <FilmsList films={filteredVideos} category="Випадкове" />
      </div>
    </>
  );
};
