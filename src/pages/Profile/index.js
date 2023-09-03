import { Header } from "../../layouts/Header";
import styled from "styled-components";
import { FILMS } from "../../const"
import { FilmsList } from "../../features/FilmsList";

const ProfileCard = styled.header`
    
    img {
        width: 200px;
    }

    p {
        font-size: 20px;
    }
`

export const Profile = () => {
    return (
        <>
            <Header />
        <div className="container">

            <h1>Profile</h1> 

            <ProfileCard>
                <img src="http://yuriy.itaw.org/ava/20230816_202538.jpg" alt="ava" />
            <h2>Юрій Мамецький</h2>
            <p>Професійний ІТ-спеціаліст та програміст</p>
            </ProfileCard>

    
                    
            <FilmsList films={FILMS[1]} cat="Улюблене"/>

        </div>
        </>
    
    )

}