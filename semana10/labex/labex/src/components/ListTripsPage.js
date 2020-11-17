import React, { useState } from "react"
import {useHistory} from "react-router-dom"

const default function ListTripsPage() {
    
    //get trips do postman
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alexandre-dumont/trips"

    const history = useHistory()

    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }

    const goApplicationForm = () => {
        history.push("/ApplicationForm/"/")
    }

    return (
        <div>
            <p>Lista de Viagens</p>
            <button onclick={goHome}>Home</button>
            <button onclick={goApplicationForm}>Candidate-se</button>
        </div>
    )

}

export default ListTripsPage;