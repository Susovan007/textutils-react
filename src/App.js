//import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
 } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (type,message)=>{
    setAlert({
      type: type,  
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 3000);

  }  

  
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#1d1946';
      showAlert("success","dark mode is enabled");
    
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('success', 'Light mode has been enabled ');

    }
  }

  
  
  return (    
    <>  

      {/* <BrowserRouter> */}
        <HashRouter>

          <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/> 
          <Alert alert={alert}/>   
              
          <div className="container my-3" >
            <Routes>                    
              <Route  exact path='/about' element={<About mode = {mode}/>} />                      
              <Route  exact path='/' element ={<TextForm showAlert={showAlert} heading = "TextUtils - Word Counter, Character counter, Remove extra spaces"mode={mode}/>} />
            </Routes>             
                  
          </div>
        </HashRouter> 
      {/* </BrowserRouter>       */}

    </>
  );
}
export default App;
