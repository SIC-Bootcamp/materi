import React from 'react'
import NavBar from '../component/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './About'
import AboutDetail from './AboutDetail'

function Home() {
  return (
    <div>
    <Router>
      <div>
      <NavBar />
      <h1>Home</h1>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/about/detail">
            <AboutDetail />
          </Route> */}
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  )
}

export default Home
