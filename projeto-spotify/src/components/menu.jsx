import React from 'react'
import{AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'

const Menu =() => {
    return (
        <h2 className='menu'>
            <ul>
                <li><a href="https://www.twitch.tv/paulinholokobr"> <AiOutlineHome className='icone'/> Inicio</a></li>
                <li><a href="https://www.twitch.tv/paulinholokobr"> <AiOutlineSearch className='icone'/> Buscar</a> </li>
            </ul>
        </h2>

    )
}

export default Menu