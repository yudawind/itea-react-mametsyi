import { useEffect, useState } from "react"
import { apiVideos } from "./api";
import { FilmsList } from "../FilmsList";

export const Videos = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        try {
            const {results} = await apiVideos.getVideos();
            setVideos(results);
            
            console.log(results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=> {
        getVideos();
    },[]);

    return (
        <>
            <FilmsList  films={videos} cat="Рандомне"/>
        </>
    )
}