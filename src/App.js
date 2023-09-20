import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import "./styles/index.scss";
import { SelectedFilmIdsProvider } from "./features/videos/components/SelectedFilmIdsProvider";

export const App = () => {
  const { home, profile } = ROUTES;

  return (
    <>
      <SelectedFilmIdsProvider>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={profile} element={<Profile />} />
          <Route path="/" element={<Navigate to={home} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SelectedFilmIdsProvider>
    </>
  );
};
