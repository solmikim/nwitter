import AppRouter from "./Router";
import {useEffect, useInsertionEffect, useState} from 'react';
import {authService} from "../myFirebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(authService, (user)=>{
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    })
  })
  
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
