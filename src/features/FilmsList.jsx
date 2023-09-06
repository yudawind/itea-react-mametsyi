import styled from "styled-components";
import { CardFilm } from "./goods/components/CardFilm";

const StyledH2 = styled.h2`
    color: #141414;
    font-family: 'Roboto', sans-serif;
`

export const FilmsList = ({films,cat}) => {
    return (
        <div className="col">
                <StyledH2>{cat}</StyledH2>
                <div className="row row-wrap">
                    {films.map((film) => 
                    <CardFilm film={film} key={film.id}/>
                )}
                </div>
                
        </div>
    )

}