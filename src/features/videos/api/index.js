import axios from "axios";



const getVideos = async ()=> {

    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
        params: {
            limit: '6',
            list: 'most_pop_movies'
        },
        headers: {
            'X-RapidAPI-Key': '5796693a59msh4cf352b95fe8c4ep13f1b0jsn429300ef5bae',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }

  };

export const apiVideos =  { getVideos }