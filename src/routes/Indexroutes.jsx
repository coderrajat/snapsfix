import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import BackgroundRemover from '../page/BackgroundRemover'
import BackgroundColour from '../page/BackgroundColour'
import ImageEnhancer from '../page/ImageEnhancer'
import AddBackground from '../page/AddBackground'

function Indexroutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/background-remover' element={<BackgroundRemover/>} />
                    <Route path='/background-color' element={<BackgroundColour/>} />
                    <Route path='/image-enhancer' element={<ImageEnhancer/>} />
                    <Route path='/add-background' element={<AddBackground/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Indexroutes