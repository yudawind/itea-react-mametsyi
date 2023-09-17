import { useEffect, useState } from "react"
import { apiVideo } from "./api";
import { CardFilm } from "../goods/components/CardFilm";
import { useSelectedFilmIds } from "./components/SelectedFilmsProvider ";
  

export const Video = () => {
    const [videos, setVideos] = useState([]);
    const { selectedFilmIds } = useSelectedFilmIds();

    const getVideo = async (id) => {
        try {
            const {results} = await apiVideo.getVideo(id);
            console.log(results);
            return results;
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    useEffect(()=> {
        const fetchVideos = async () => {
            const videoResults = await Promise.all(selectedFilmIds.map((id) => getVideo(id)));
            const filteredVideos = videoResults.filter((video) => video !== null);
            setVideos(filteredVideos);
        };

        fetchVideos();
    },[selectedFilmIds]);

    if (selectedFilmIds.length === 0) {
        return <p>Обрані фільми відсутні.</p>;
    }

    return (
        <>
            {videos.map((film, index) => (
                <CardFilm film={film} key={selectedFilmIds[index]} />
            ))}
        </>
    )
}