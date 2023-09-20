import { Button } from "../../components/Button/Button";
import "./index.scss";
import React, { useEffect, useState } from "react";

export const CardFilm = ({ film, onLikeClick, isLiked }) => {
  // console.log(film);
  // console.log(film.primaryImage.url);
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

  const handleLike = () => {
    onLikeClick(film.id);
  };

  useEffect(() => {
    document.title = `рейтинг фільму ${rating}`;
  }, [rating]);

  return (
    <>
      <div className="card" id={film.id}>
        <img
          src={
            film.primaryImage && film.primaryImage.url
              ? film.primaryImage.url
              : "https://picsum.photos/320/477/"
          }
          onClick={openModal}
          onError={(e) => {
            e.target.src = "https://picsum.photos/320/477";
          }}
          alt="poster"
        />
        <div className="card-body">
          <h3>{film.titleText.text}</h3>
          {/* <p>{film.overview}</p> */}
        </div>
        <Button onClick={handleLike}>
          {isLiked ? "Видалити вподобайку" : "Вподобати"}
        </Button>
        <Button onClick={openModal}>подробиці</Button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={film.primaryImage && film.primaryImage.url}
              alt="poster"
              onError={(e) => {
                e.target.src = "https://picsum.photos/320/477";
              }}
            />
            <div className="modal-body">
              <h3>{film.title}</h3>
              <p>Рік {film.releaseYear.year}</p>
              <p>{film.primaryImage.caption.plainText}</p>
              <p>
                Рейтинг 7 из 10{" "}
                {!showRatingInput ? "(Моя оцінка " + rating + ")" : ""}
              </p>
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
                  />
                  &nbsp;
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
  );
};
