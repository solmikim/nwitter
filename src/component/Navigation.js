import {Link} from 'react-router-dom';
import Profile from '../routes/Profile';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Profile">My Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;