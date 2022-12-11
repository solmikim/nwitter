import React from 'react';
import { useHistory } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import { authService } from 'myFirebase';

const Profile = () => {
    const history = useHistory();
    const onLogOut = () => {
        signOut(authService);
        history.push("/")
    }
    return (
        <div><button onClick={onLogOut}>Logout</button></div>
    )
}
    

export default Profile;