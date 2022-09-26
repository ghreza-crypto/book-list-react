import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>List of Books</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Book</Link>
            </div>
        </nav>
    );
}

export default Navbar;