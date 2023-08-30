import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <Link to="/home">Go to Home</Link>
            &nbsp;|&nbsp;
            <Link to="/profile">Go to Profile</Link>
        </header>
    )

}