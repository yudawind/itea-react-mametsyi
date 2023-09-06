import { Button } from "../../../components/Button/Button"
import "../styles/index.scss"
import React, { useState } from 'react';


export const CardFilm = ({film}) => {

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
    setIsModalOpen(true);
    console.log('модалка true')
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
    console.log('модалка false')
  }

    return (
        <>
            <div className="card" id={film.id}>
                <img src={film.poster_path} onClick={openModal} alt="poster" />
                <div className="card-body">
                    <h3>{film.title}</h3>
                    <p>{film.overview}</p>
                </div>
                <Button inner='подробиці' onClick={openModal} />
            </div>

            {isModalOpen && (
                <div className="modal" >

                    <div className="modal-content">
                        <img src={film.poster_path} alt="poster" />
                        <div className="modal-body">
                            <h3>{film.title}</h3>
                            <p>Рік {film.year}</p>
                            <p>{film.overview}</p>
                            <p>Рейтинг {film.rate}</p>
                            <Button  inner='закрити' onClick={closeModal} />
                        </div>
                    </div>
                    <div className="modal-overlay" onClick={closeModal}></div>
                </div>
            )}

        </>
        
    )
}
