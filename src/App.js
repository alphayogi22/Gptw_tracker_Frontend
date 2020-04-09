import React from "react";
import Main from './main';
import Navbar from './components/navbar/navbar.js';

const App = () => (
     <div>
       <Navbar/>
       <div className="container">
       <Main />
       </div>
      </div>
    );

export default App;
