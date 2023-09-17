import React, { createContext, useContext, useState } from "react";

const SelectedFilmIdsContext = createContext();

export const SelectedFilmIdsProvider = ({ children }) => {
  const [selectedFilmIds, setSelectedFilmIds] = useState([]);

  const addSelectedFilmId = (filmId) => {
    setSelectedFilmIds((prevSelectedFilmIds) => [
      ...prevSelectedFilmIds,
      filmId,
    ]);
  };

  const removeSelectedFilmId = (filmId) => {
    setSelectedFilmIds((prevSelectedFilmIds) =>
      prevSelectedFilmIds.filter((id) => id !== filmId)
    );
  };

  return (
    <SelectedFilmIdsContext.Provider
      value={{ selectedFilmIds, addSelectedFilmId, removeSelectedFilmId }}
    >
      {children}
    </SelectedFilmIdsContext.Provider>
  );
};

export const useSelectedFilmIds = () => {
  return useContext(SelectedFilmIdsContext);
};
