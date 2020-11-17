import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CreateTripPage from '../components/CreateTripPage'
import ApplicationFormPage from '../components/ApplicationFormPage'
import HomePage from '../components/HomePage'
import ListTripsPage from '../components/ListTripsPage'
import LoginPage from '../components/LoginPage'
import TripDetailsPage from '../components/TripDetailsPage'

function Router (){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/detalhes">
                <TripDetailsPage/>
            </Route>
            <Route exact path="/viagens">
                <ListTripsPage/>
            </Route>
            <Route exact path="/increver">
                <ApplicationFormPage/>
            </Route>    
            <Route exact path="/criarviagem">
                <CreateTripPage/>
            </Route>
        </Switch>
    </BrowserRouter>

)
}

export default Router