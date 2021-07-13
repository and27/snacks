import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Snack from "../Snack/Snack"
import axios from 'axios'; 


const SnacksContainer = ({

}) => {
    const apikey = "563492ad6f91700001000001d5e3e2f0b0934fe9933ab934b093d0da"
    const url = "https://api.pexels.com/v1/search?query=marketing&per_page=3"
    const [imgUrl, setImgUrl] = useState("");
    const [rand, setRand] = useState(0);
    const min = 0;
    const max = 2;

    useEffect(()=>{      
        const rand2 = Math.floor(Math.random() * (max - min))+min;
        setRand(rand2);
        console.log(rand2);
    },[])

    useEffect(()=>{      
       axios.get(url, {headers:{Authorization:apikey}}).then(
           res=>res.data.photos.map((el, idx)=>{
               console.log(el)
               aux[idx].f({...aux[idx].v, url:el.src.medium})})
       )
    },[])

    
    const [snack1, setSnack1] = useState({
        subtitle:"Buyer Persona", 
        description:"Define <span>correctamente quién</span> es tu persona...",
        url : ""
    })
    const [snack2, setSnack2] = useState({

        subtitle:"Construye tu presencia online", 
        description: "Con la revolución de los <span>Micro-Momentos</span>, tu empresa necesita construir una fuerte presencia virtual para mantenerse activa en el mercado." ,
        url : ""


    })
    const [snack3, setSnack3] = useState({

        subtitle:"Invierte en las redes sociales", 
        description:"Hoy en día es <span>difícil</span> encontrar a alguien que no forme parte de alguna red social. ",
        url : ""

    })
    const aux=[{f:setSnack1, v:snack1}, {f:setSnack2, v:snack2}, {f:setSnack3, v:snack3}]

    const snack4 = {
        subtitle:"Buyer Pasdfasdfersona", 
        description:"Define <span>correasdfuién</span> es tu persona...",
        url : "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    }
    const snack5 = {
        subtitle:"Construye tuasdfasdf presencia online", 
        description: "Con la revolución de los <span>Micro-Momentos</span>, tu empresa necesita construir una fuerte presencia virtual para mantenerse activa en el mercado." ,
        url : "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"


    }
    const snack6 = {
        subtitle:"Invierte en lasasdfasdf redes sociales", 
        description:"Hoy en día asdfcontrar a alguien que no forme parte de alguna red social. ",
        url : "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

    }

    const snackPack1 = [snack1, snack2, snack3]
    const snackPack2 = [snack4, snack5, snack6]



     return (<>
     <div className="container-fluid">
      <div className="row">
          {rand==0 ? 
          snackPack1.map((el,idx)=>
          (<Snack url = {el.url} number={idx+1} subtitle={el.subtitle} description={el.description}/>)):
          snackPack2.map((el,idx) =>
            (<Snack url = {el.url} number={idx+1} subtitle={el.subtitle} description={el.description}/>))}


        </div>
        </div>
    </>);
};

export default SnacksContainer;
