import {useState} from 'react'

export default  function OptionsMensaje (){

    const [selectedOptions, setSelected]= useState([])

    const handelSelected=(e)=>{

        if(e.target.checked){

            setSelected([...selectedOptions,e.target.value])
        }

        setSelected(selectedOptions.filter(o=> o !== e.target.value))


    }

    console.log(selectedOptions)


    return(
        <div>
            <label><input onChange={(e)=>handelSelected(e)} id='invitacion' name='invitacion' type='checkbox' value='Invitacion'/>Invitacion</label>
            <label><input id='recordatorio'  name='recordatorio' type='checkbox' value='Recordatorio'/>Recordatorio de proceso</label>
            <label><input id='personalizado' name='personalizado' type='checkbox' value='Personalizado'/>Personalizado</label>
       </div>
    )
}