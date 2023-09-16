import { Header } from "../../layouts/Header";
import styled from "styled-components";
import { FILMS } from "../../const"
import { FilmsList } from "../../features/FilmsList";
import { useEffect } from "react";

const ProfileCard = styled.header`
    
    img {
        width: 200px;
    }

    p {
        font-size: 20px;
    }
`

const filmsUlublene = FILMS.filter(film => film.genre === 'Комедія')



const getData = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        console.log(data.data);
    } catch (error) {
        console.error('data error:', error);
    } finally {
        console.log('finally');
    }
 };

export const Profile = () => {
    
  useEffect(() => getData())

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

    
                    
            <FilmsList films={filmsUlublene} cat="Улюблене"/>

        </div>
        </>
    
    )

}