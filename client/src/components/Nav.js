import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container d-flex ">
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-contnet-center justify-content-md-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
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