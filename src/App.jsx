import { useState } from 'react';
import './App.css'
//import ResponsiveAppBar from './ResponsiveAppBar'
import * as React from 'react';
import { Header} from './common/header/Header';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Pages } from './pages/Pages';

function App() {
 return(
  <> 

    <Router>  
    <Header/>
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>

        </Switch>
        </Router>
    </>
 )
}

export default App
