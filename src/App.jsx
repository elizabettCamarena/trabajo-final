import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import login from './pages/login';
import Login from './pages/login';




function App() {

   return <BrowserRouter>
   <main>
    <h1>Bienvenidos</h1>
    <Link
        to="/login"
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <button>ingresar</button>
      </Link>

   </main>
   </BrowserRouter>
 
}

export default App;