import React from 'react'
import{AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'

const Menu =() => {
    return (
        <h2 className='menu'>
            <ul>
                <a href="https://www.twitch.tv/paulinholokobr"><li> <AiOutlineHome/> Inicio</li></a>
                <a href="https://www.twitch.tv/paulinholokobr"><li> <AiOutlineSearch/> Buscar</li></a> 
            </ul>
        </h2>

    )
}

export default Menu