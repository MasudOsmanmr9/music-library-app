import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Nav/>
            <div className='container'>
                <Outlet />
            </div>

        </div>
    )
}

export default Layout