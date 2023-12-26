import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to="/" className="navbar-brand">
                Home
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/create-music" className="nav-link">
                            Create Music
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/music-lists" className="nav-link">
                            Music List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Music Search
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Nav