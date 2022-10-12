
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './PaginaWeb/nav.js';
import Card from './PaginaWeb/card.js';
import Acercade from './PaginaWeb/Acercade.js';
import App from './Villanos/index_villano.js';
import Heroes from './Heroes/index_heroes.js';

function app() {
  return (<div>

    

   


   <BrowserRouter>
       
            <Nav />
            <br></br> <br></br> <br></br> <br></br>
            
      <Routes>
        
            <Route path="/" element={<Card />} />
        
            <Route path="Villano" element={<App />} />

            <Route path="Heroes" element={<Heroes/>} />

            <Route path="Acercade" element={<Acercade/>} />
           
          
      </Routes>
    </BrowserRouter>
  </div>
   
 
  );
}

export default app;
