let preguntasJSON=[

    {id:1,p:'primer pregunta',video:'v1',completado:false},
    {id:2,p:'segunda pregunta',video:'v2',completado:false},
    {id:3,p:'tercer pregunta',video:'v3',completado:false},
    {id:4,p:'cuarta pregunta',video:'v4',completado:false}
]

export function getPreguntas(){
    return preguntasJSON
}

export function putPreguntas(id){

 preguntasJSON.map(p=>{
     if(p.id==id){
        p.completado=true
     }
 })
 return 'done'


}
// console.log(preguntasJSON)
// console.log(putPreguntas(1))
// console.log(preguntasJSON)