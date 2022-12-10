import React, {useState} from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        let {target : {name, value}} = event;  
        name=='Email' ? setEmail(value) : setPassword(value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="Email" placeholder="Email" value={email} onChange={onChange} required/>
                <input tpye="password" name="Password" placeholder='Password' value={password} onChange={onChange} required></input>
                <input type="submit" value="Log In"/>
            </form>
            <button>Continue With Google</button>
            <button>Continue With Github</button>
        </div>
    );
}


export default Auth;