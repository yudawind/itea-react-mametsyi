import { Header } from "../../layouts/Header"
import { FilmsList } from "../../features/FilmsList"
import { FILMS } from "../../const"
import styled from "styled-components";
import { CookieMessage } from "../../layouts/Footer/CookieMessage";

const StContainer = styled.div`
    color: #141414;
    font-family: 'Roboto', sans-serif;
    max-width: 1370px;
    margin: 0 auto;
    padding: 0 15px;

    h1 {
        padding: 15px 0 0;
    }
`

const filmsKomedy = FILMS.filter(film => film.genre === 'Комедія')
const filmsUkraine = FILMS.filter(film => film.genre === 'Українське')


export const Home = () => {

    return (
        <>
            <Header />

            <StContainer>

                        <h1>Home</h1>

                        <div className="row">
                                
                        <FilmsList films={filmsKomedy} cat="Комедії"/>
                                
                        <FilmsList films={filmsUkraine} cat="Українське"/>
                        </div>
            </StContainer>

            <CookieMessage />
        </>
        
    )
}
