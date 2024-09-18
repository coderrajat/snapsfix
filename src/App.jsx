import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../src/assets/styles/style.css"
import { BrowserRouter } from 'react-router-dom'
import Indexroutes from './routes/Indexroutes'

function App() {

  return (
    <>
     
        <Indexroutes />
    </>
  )
}

export default App
