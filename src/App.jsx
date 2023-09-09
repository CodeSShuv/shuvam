import React, { useState, createContext } from 'react'
import "./App.css"
import Main from './Components/Main'
const CanvasContext = createContext();
const App = () => {

  const [canvas, setcanvas] = useState(false);
  const [state, setState] = useState("off");
  const changeCanvasState = () => {
    if (canvas) {
      setcanvas(false);
      setState("off");
      return;
    }
    setcanvas(true);
    setState("on");
    return;
  }
  return (
    <CanvasContext.Provider value={canvas}>
      <div className='App'>
    
        <Main method={changeCanvasState} state={state} />
      </div>
    </CanvasContext.Provider>
  )
}
export default App;
export{CanvasContext};