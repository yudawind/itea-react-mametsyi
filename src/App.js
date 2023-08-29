import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Link } from "react-router-dom";



export const App = () => {
const {home, profile} = ROUTES;

    return (
      <>
      <header>
        <Link to="/home">Go to Home</Link>
        &nbsp;|&nbsp;
        <Link to="/profile">Go to Profile</Link>
      </header>

      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={profile} element={<Profile />} />
        <Route path="/" element={<Navigate to={home} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      </>
      
    )
}