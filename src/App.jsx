import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';




function App() {

   return <BrowserRouter>
   <main>
    <h1>Bienvenidos</h1>
    <Link to="/Login">Iniciar sesión</Link>
    <Routes>
            <Route exact path='/Login' element={<Login/>} />
    </Routes>
   </main>
   </BrowserRouter>
 
}

export default App;