import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Produtos from './pages/produtos'
const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/sobre' element ={<Sobre/>} />
            <Route path='/produtos' element ={<Produtos/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router 