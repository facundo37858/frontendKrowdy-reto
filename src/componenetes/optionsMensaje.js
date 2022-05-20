import {useState} from 'react'

export default  function OptionsMensaje (){

    const [selectedOptions, setSelected]= useState([])

    const handelSelected


    return(
        <div>
            <label><input id='invitacion' name='invitacion' type='checkbox' value='Invitacion'/>Invitacion</label>
            <label><input id='recordatorio'  name='recordatorio' type='checkbox' value='Recordatorio'/>Recordatorio de proceso</label>
            <label><input id='personalizado' name='personalizado' type='checkbox' value='Personalizado'/>Personalizado</label>
       </div>
    )
}