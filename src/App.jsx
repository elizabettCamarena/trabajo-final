import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './login';




function App() {

   return <BrowserRouter>
   <main>
    <h1>Bienvenidos</h1>
    <Link to="/login">Iniciar sesión</Link>
    <Routes>
            <Route exact path='/login' element={<Login/>} />
    </Routes>
   </main>
   </BrowserRouter>
 
}

export default App;