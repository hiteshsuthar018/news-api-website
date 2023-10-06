import './App.css';
// import TextField from "@mui/material/TextField";
import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=>  {
   const pageSize = 15
   const apiKey = process.env.REACT_APP_NEWS_API;
   
   const[progress,setProgress]= useState(0)
  
  
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}

/>
        <Navbar/>
        <Routes>
        <Route exact  path='/' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
        <Route exact  path='business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}/>
        <Route exact  path='entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
        <Route exact  path='health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}/>
        <Route exact  path='science' element={<News apiKey={apiKey} setProgress={setProgress} key="science"  pageSize={pageSize} country="in" category="science"/>}/>
        <Route exact  path='sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
        <Route exact  path='technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
        
        
      </div>
    )
  }



export default App;


// https://icons8.com/preloaders/