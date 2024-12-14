import './App.css'
import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Questions } from './Components/Questions/Questions';
import { GameOver } from './Components/GameOver/GameOver';


        
function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/question'  element={<Questions />}/>
          <Route path='/gameover' element={<GameOver />}/>
        </Routes>
    </>
  )
}

export default App
