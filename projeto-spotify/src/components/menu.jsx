import React from 'react'
import{AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'

const Menu =() => {
    return (
        <h2 className='menu'>
            <ul>
                <li><a href="https://www.twitch.tv/paulinholokobr"> <AiOutlineHome/> Inicio</a></li>
                <li><a href="https://www.twitch.tv/paulinholokobr"> <AiOutlineSearch/> Buscar</a> </li>
            </ul>
        </h2>

    )
}

export default Menu