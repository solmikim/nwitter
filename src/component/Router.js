import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from './Navigation';
 
const AppRouter =  ({isLoggedIn}) => {

    // fragment는 들어갈 태그들이 많은데 div, span .. 등 에 넣기 싫을 때 사용 
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ?
                (<> 
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/Profile" >
                        <Profile/>
                    </Route>
                    <Redirect from="*" to="/"></Redirect>
                </>)  : 
                
                (
                <>
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                    <Redirect from="*" to="/"></Redirect>
                </>
                )
            }
            </Switch>
        </Router>
    )
}


export default AppRouter;
