import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
 
const AppRouter =  ({isLoggedIn}) => {

    // fragment는 들어갈 태그들이 많은데 div, span .. 등 에 넣기 싫을 때 사용 
    return (
        <Router>
            <Switch>
                {isLoggedIn ?
                (<> 
                <Route exact path="/">
                    <Home/>
                </Route>
                </>)  : 
                
                (<Route exact path="/">
                    <Auth/>
                </Route>)
            }
            </Switch>
        </Router>
    )
}


export default AppRouter;
