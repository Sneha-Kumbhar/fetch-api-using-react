
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Jewellery from './components/Jewellery';

import Games from './components/Games';
import Navbarmain from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
 

  return(
    <BrowserRouter>
    <>
    <Navbarmain/>
    <Routes>
    <Route path="/" element={<Jewellery/>}/>
  
      <Route path="games" element={<Games/>}/>
  
    </Routes>
    </>
    </BrowserRouter>
    
  )
}

 

export default App;
