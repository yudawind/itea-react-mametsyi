import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import "./styles/index.scss";
import { SelectedFilmIdsProvider } from "./features/films/components/SelectedFilmIdsProvider";
import { SearchTitle } from "./pages/SearchTitle";
import { Layout } from "./layouts/Layout";

export const App = () => {
  const { home, profile, searchTitle } = ROUTES;

  return (
    <>
      <SelectedFilmIdsProvider>
        <Layout>
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={profile} element={<Profile />} />
            <Route path={searchTitle} element={<SearchTitle />} />
            <Route path="/" element={<Navigate to={home} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </SelectedFilmIdsProvider>
    </>
  );
};
