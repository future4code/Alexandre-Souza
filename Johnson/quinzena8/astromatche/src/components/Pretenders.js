import React, { useEffect, useState} from 'react'
import axios from 'axios'

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandre-oliveira/person'
const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandre-oliveira/choose-person'

function Pretenders (props){
    const [profiles, setProfiles]=useState({})
    const [choiceProfile, setChoiceProfile]=useState(false)
    const [renderComponent, setRenderComponent]=useState(false)

    const getProfileToChoose = ()=>{
        axios.get(urlGet)
        .then((res)=>{
            setProfiles(res.data.profile)
        })
        .catch((err)=>{
            alert(`Erro ${err}`)
        })
    }

    const postChooseMatches = ()=>{
        const body={
            id:profiles.id,
            choice:choiceProfile
        }
        axios.post(urlPost,body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            alert(`Erro: `,err.message)
        })
    }

    const onclicklike = ()=>{
        setChoiceProfile(true)
        getProfileToChoose()
        setRenderComponent(!renderComponent)
    }

    const onClickeDislike = ()=>{
        setChoiceProfile(false)
        getProfileToChoose()
        setRenderComponent(!renderComponent)
    }

    useEffect(()=>{
        getProfileToChoose()
    },[])

    useEffect(()=>{
        postChooseMatches()
    },[renderComponent])

    console.log(choiceProfile)
    return(

        <div>
            <button onClick={props.onClickPretenders}>Matches</button>
            <div>
                <img src={profiles.photo} alt='foto'/>
            </div>
            <div>
                <p>Name: {profiles.name}</p>
                <p>Age: {profiles.age}</p>
                <p>{profiles.bio}</p>
            </div>
            <div>
                <button onClick={onClickeDislike}>Dislike</button>
                <button onClick={onclicklike}>Like</button>
            </div>
        </div>

    )

}
export default Pretenders