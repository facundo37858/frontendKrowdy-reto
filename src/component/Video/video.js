import { useState } from "react"
import { Link, useParams, useSearchParams,generatePath, useNavigate } from "react-router-dom";
import { putPreguntas } from "../../data/data";

let mediaRecorder;
let recordedBlobs;
export default function Video({id}){

    const [disabledRec,setDisabledRec]=useState(true)
    const [disabledPlay,setDisabledPlay]=useState(true)
    const [disabledDowload,setDisabledDowload]=useState(true)

    let navigator=useNavigate()


   
    



    

    
    


    const init= async(contrains)=>{

        try{

            const stream= await navigator.mediaDevices.getUserMedia(contrains)

            handelSucces(stream)

        }catch(e){
            console.log(e)
        }

        

    }

    const handelSucces=(stream)=>{

       setDisabledRec((disabledRec)=>!disabledRec)

        window.stream=stream

        const gumVideo= document.querySelector('video#gum')

        gumVideo.srcObject=stream

    }
  
    
    


    const handelStart= async()=>{

       

        const contrains={
            video:{
                width:400,height:400
            },
            audio:true
        }

        console.log('using media',contrains)

        await init(contrains)

    }

    const handelRecort=()=>{

         console.log('rec s')

        if(document.getElementById('record').textContent==='Rec'){

            startRecording()
        }else{
            stopRecording()
            document.getElementById('record').textContent='Rec'
        }

    }

  
    function stopRecording() {
        mediaRecorder.stop();
    }

    
  
    const startRecording=()=>{

        recordedBlobs = [];
        let options = {mimeType: 'video/webm;codecs=vp9,opus'};
        try {

          mediaRecorder = new MediaRecorder(window.stream, options);

          console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
          document.getElementById('record').textContent= 'Stop Recording';
          // playButton.disabled = true;
          setDisabledPlay((disabledPlay)=>!disabledPlay)
          // downloadButton.disabled = true;
          setDisabledDowload((disabledDowload)=>!disabledDowload)
          mediaRecorder.onstop = (event) => {
            console.log('Recorder stopped: ', event);
            console.log('Recorded Blobs: ', recordedBlobs);
          };
          mediaRecorder.ondataavailable = handleDataAvailable;
          mediaRecorder.start();
          console.log('MediaRecorder started', mediaRecorder);




        } catch (e) {
          console.error('Exception while creating MediaRecorder:', e);
        //   errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
          return;
        }
       

        


    }
    function handleDataAvailable(event) {
        console.log('handleDataAvailable', event);
        if (event.data && event.data.size > 0) {
          recordedBlobs.push(event.data);
        }
    }

    function handelPaly(){

        const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
        document.getElementById('recorded').src = null;
        document.getElementById('recorded').srcObject = null;
        document.getElementById('recorded').src = window.URL.createObjectURL(superBuffer);
        document.getElementById('recorded').controls = true;
        document.getElementById('recorded').play()

        console.log('url: ', window.URL.createObjectURL(superBuffer))


    }

    function handelDowload(){

        const blob = new Blob(recordedBlobs, {type: 'video/mp4'});

        const url = window.URL.createObjectURL(blob);
        console.log(url)

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'test.mp4';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 100);
    }

    function handelSiguiente(e){
        
        
        putPreguntas(e.target.id)
        navigator(`/preguntas/${String(Number(e.target.id)+1)}`,{ replace: true })
        refreshPage()
    


    }

    function refreshPage() {
        window.location.reload(false);
    }
    




    return(
        
        <div>
            
          
            <video src=" " id='gum' playsInline autoPlay ></video>
            <div>
                <video src="" id="recorded" playsInline loop autoPlay></video>
            </div>

           

            <button onClick={handelStart}  id='start'>Comenzar</button>

            <button onClick={handelRecort} disabled={disabledRec} id="record">Rec</button>

            <button  onClick={handelPaly} disabled={disabledPlay} id="play">Play</button>

            {/* <button onClick={handelDowload} disabled={disabledDowload} id="dowload">Dowload</button> */}

            <button id={id} onClick={(e)=>handelSiguiente(e)}>Siguiente</button>

            

        </div>
    )
}