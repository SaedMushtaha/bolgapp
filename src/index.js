import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter , Routes, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <App /> 
      {/* <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes> */}
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
