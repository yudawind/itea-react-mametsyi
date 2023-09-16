import { Button } from "../../../components/Button/Button"
import "../styles/index.scss"
import React, { useEffect, useState } from 'react';


export const CardFilm = ({film}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const [showRatingInput, setShowRatingInput] = useState(true);
    
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleRatingChange = (e) => {
      const newRating = parseFloat(e.target.value);
      setRating(newRating);
    };
  
    const handleSetRating = () => {
        setShowRatingInput(false); 
      setRating(rating);
    };

    useEffect(() => {
      document.title = `рейтинг фільму ${rating}`;
    },[rating])

return (
        <>
            <div className="card" id={film.id}>
                <img src={film.poster_path} onClick={openModal} alt="poster" />
                <div className="card-body">
                    <h3>{film.title}</h3>
                    <p>{film.overview}</p>
                </div>
                <Button onClick={openModal}>подробиці</Button>
            </div>

            {isModalOpen && (
                <div className="modal" >

                    <div className="modal-content">
                        <img src={film.poster_path} alt="poster" />
                        <div className="modal-body">
                            <h3>{film.title}</h3>
                            <p>Рік {film.year}</p>
                            <p>{film.overview}</p>
                            <p>Рейтинг {film.rate} из 10 {!showRatingInput ? ('(Моя оцінка ' + rating + ')') : ''}</p>
                            {showRatingInput && (
                              <p>   
                                <input
                                  id=""
                                  type="number"
                                  min="0"
                                  max="10"
                                  step="1"
                                  value={rating || ""}
                                  onChange={handleRatingChange}
                                />&nbsp;
                                <Button onClick={handleSetRating}>оцінити</Button>
                              </p>
                            )}
                            
                            <Button onClick={closeModal}>закрити</Button>
                        </div>

                    </div>
                    <div className="modal-overlay" onClick={closeModal}></div>
                    
                </div>
            )}

        </>
        
    )
}
