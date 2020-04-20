import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { DatesList, DateSubmission, DateFavorites, DateTests } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/dates/list" exact component={DatesList} />
                <Route path="/dates/submit" exact component={DateSubmission} />
                <Route path="/dates/favorites" exact component={DateFavorites}/>
                <Route path="/dates/tests" exact component={DateTests}/>
            </Switch>
        </Router>
    )
}

export default App