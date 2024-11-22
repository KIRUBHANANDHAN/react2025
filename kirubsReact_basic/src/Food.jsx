import { useState } from 'react'
import profile from './assets/kirubs.jpg'

function Food(props){

    const [name,setName] = useState("kirubs")

    function handleNameChange(event){
        setName(event.target.value)
    }

    return(
        <>
        <h1>Kirubs Website</h1>
        <div className="card">
            <img className='card-image' src={profile} alt="poda" />
            <marquee>Introvert</marquee>
            <ul style={{padding: '8px',marginTop:'0px'}}>
            <h2>Fav foods listed below:</h2>
            <li>{props.food}</li>
            <li>{props.fruit}</li>
            <li>{props.hobbie}</li>

        </ul>
            
        </div>

        <div>
            <input type="text" name="" id="" onChange={handleNameChange}/>
            <h2>Name:{name}</h2>
        </div>


       
        </>

        
    )
}

Food.defaultProps = {
    food:"curd rice",
    fruit:"mango"
}

export default Food