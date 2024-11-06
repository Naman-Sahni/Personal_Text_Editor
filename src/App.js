import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Textarea from './components/Textarea';

function App() {
  const [mode, setmode] = useState("light")
  
  const toggleModeChange=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor = '#212529f7'
    } else {
      setmode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
        <Navbar mode={mode} changeMode ={toggleModeChange} />
        <Textarea  mode={mode}/>
        
    </>
  );
}

export default App;
