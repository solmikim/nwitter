import AppRouter from "./Router";
import {useEffect, useInsertionEffect, useState} from 'react';
import {authService} from "../myFirebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObject, setUserObject] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(authService, (user)=>{
      if(user){
        setIsLoggedIn(true);
        setUserObject(user); 
      }else{
        setIsLoggedIn(false);
      }
    })
  })
  
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn} userObject={userObject}/>
    </div>
  );
}

export default App;
