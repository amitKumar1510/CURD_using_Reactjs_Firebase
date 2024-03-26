import React from 'react';
import Add from './Add.jsx';
import Update from './Update.jsx';
import Delete from './Delete.jsx';
import UploadImage from './UploadImage.jsx';
import MainPage from './MainPage.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default function App(){
  return(
    <div>
      <Router>
        <div>
          <Routes>
            <Route 
              path="/add" 
              element={ <Add />}
            />

            <Route 
              path="/update" 
              element={ <Update />}
            />

            <Route 
              path="/delete" 
              element={ <Delete/>}
            />

            <Route 
              path="/image" 
              element={ <UploadImage/>}
            />
            <Route 
              path="/" 
              element={ <MainPage/>}
            />
          </Routes>
        </div>
      </Router>    
   </div>
  );
}
