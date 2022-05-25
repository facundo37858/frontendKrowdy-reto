import { useState,useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getPreguntas } from "../../data/data"
import Video from "../Video/video"


export const Pregunta=()=>{

    const [pregunta, setPregunta]=useState(null)

    const {id}=useParams()

    const [satausId,setId]=useState(id)

    

    
    useEffect(()=>{

        let preguntasGet=getPreguntas()

        preguntasGet=preguntasGet.filter(p=> p.id===Number(id))

        setPregunta(preguntasGet)

    },[satausId])

   
    
    return(
        <div>
            <Video id={id}/>
            <p>{pregunta?pregunta[0].p:null}</p>
            
        </div>
    )
}