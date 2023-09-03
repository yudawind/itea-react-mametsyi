import { Header } from "../../layouts/Header"
import { FilmsList } from "../../features/FilmsList"
import { FILMS } from "../../const"
import styled from "styled-components";

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

export const Home = () => {

    return (
        <>
    <Header />

<StContainer>

            <h1>Home</h1>

            <div className="row">
                    
            <FilmsList films={FILMS[0]} cat="Комедії"/>
                    
            <FilmsList films={FILMS[1]} cat="Українське"/>
            </div>
</StContainer>
            
        </>
        
    )
}
