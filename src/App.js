import './App.css';
import React from 'react'
import Header from './header'
import Home from './Home'
import Checkout from './Checkout'


import {BrowserRouter as Router , Switch, Route } from 'react-router-dom'

import Login from './login'


function App() {
  return (
    <Router>
 

    <div className="App">
       <Switch>
         <Route path='/checkout'>
          <Header/>
          <Checkout/>
          </Route>
          <Route path='/login'>
          <Login/>
          </Route>

          <Route path ='/'>
            <Header/>
            <Home/>

          </Route>
       </Switch>
   
    </div>

    </Router>
  )
}

export default App;
