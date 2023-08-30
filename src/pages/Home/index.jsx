import { CardFilm } from "../../components/CardFilm"
import { Header } from "../../layouts/Header"
import { FILMS } from "../../const"

export const Home = () => {

    return (
        <>
            <Header />

            <h1>Home</h1>

            <div style={{display: 'flex',gap: '30px'}}>

                    <div style={{width: '320px'}}>
                        <h2>Комедії</h2>

                    {FILMS[0].map((film) => 
                            
                            <CardFilm 
                            film={film} />
                            
                        )}
                    </div>

                    <div style={{width: '320px'}}>
                        <h2>Україньськи фільми</h2>

                    {FILMS[1].map((film) => 
                            
                            <CardFilm 
                            film={film} />
                            
                        )}
                    </div>
            </div>
        </>
        
    )
}
