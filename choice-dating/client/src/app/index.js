import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { DatesList, DateSubmission, DateFavorites, DateTests, FrontPage, ActiveDate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/dates/hello" exact component={FrontPage} />
                <Route path="/dates/list" exact component={DatesList} />
                <Route path="/dates/submit" exact component={DateSubmission} />
                <Route path="/dates/favorites" exact component={DateFavorites}/>
                <Route path="/dates/tests" exact component={DateTests}/>
                <Route path="/dates/active" exact component={ActiveDate}/>
            </Switch>
        </Router>
    )
}

export default App