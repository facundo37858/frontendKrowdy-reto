import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Pregunta } from './component/Pregunta/Pregunta';
import { Preguntas } from './component/Preguntas/Preguntas';
import Video from './component/Video/video';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Preguntas />}></Route>
        
          <Route  path='preguntas/:id' element={<Pregunta />} />
        

        </Routes>

        
      

      

      </BrowserRouter>
      {/* <Video/> */}
      

  
    </div>
  );
}

export default App;
