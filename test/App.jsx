import React from "react";
import ReactDOM from 'react-dom';

const App = () =>{
    return (
        <Router>
            <Switch>
                <Route path="/pay">
                    <Pay />
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
            </Switch>
        </Router>
    )
  }