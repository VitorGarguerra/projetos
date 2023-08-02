import React from 'react'
import { Link } from 'react-router-dom'
import Titulo from './titulo'

const Menu =() => {
    return (
        <nav>
            <div className='titulo'>
                <Titulo/>
            </div>
            <div className='menu'>
        <Link to= '/'>Home</Link>
        <Link to= '/sobre'>Sobre</Link>
        <Link to= '/produtos'>Produtos</Link>
        </div>
        </nav>
        
    )
}

export default Menu