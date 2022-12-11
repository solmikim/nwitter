import { authService } from 'myFirebase';
import React, {useState} from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,
        GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");

    const onChange = (event) => {
        let {target : {name, value}} = event;  
        name=='Email' ? setEmail(value) : setPassword(value);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
    
        try{
            newAccount ? await createUserWithEmailAndPassword(authService, email, password) : await signInWithEmailAndPassword(authService, email, password);
        }catch(error){
            setError(error.message);
        }
        
    }

    const onSocialClick = (event) => {
        let {target : {name}} = event;
        let provider = name === 'google' ? new GoogleAuthProvider() : new GithubAuthProvider();
        let result = signInWithPopup(authService, provider);

        console.log('>>>>> 결과 ', result)
    }

    const toggleAccount = () => setNewAccount((pre)=>!pre);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="Email" placeholder="Email" value={email} onChange={onChange} required/>
                <input type="password" name="Password" placeholder='Password' value={password} onChange={onChange} required></input>
                <input type="submit" value={newAccount ? "Create Account" : "Login"}/>
            </form>

            <div>{error}</div>
            <button onClick={toggleAccount}>{newAccount ? "Log in" : "Create Account"}</button>
            <button name="google" onClick={onSocialClick}>Continue With Google</button>
            <button name="github" onClick={onSocialClick}>Continue With Github</button>
        </div>
    );
}


export default Auth;