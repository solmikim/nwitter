import AppRouter from "./Router";
import {useState} from 'react';
import {authService} from "../myFirebase";

function App() {
  console.log('>>>>>> ',authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
