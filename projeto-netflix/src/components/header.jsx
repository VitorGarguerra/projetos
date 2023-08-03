import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineNotificationsNone} from 'react-icons/md'

const Header =() => {
    return (
        <div className='cabeçalho'>
            <div className='header'>
                <h2 className='h2'>Pobreflix</h2>
                <div>
                    <ul className='lista'>
                        <a href="netflix"><li className='nav'>Navegar</li></a>
                        <a href="netflix.com"><li className='lista01'>Início</li></a>
                        <a href="netflix.com"><li className='lista01'>Séries</li></a>
                        <a href="netflix.com"><li className='lista01'>Filmes</li></a>
                        <a href="netflix.com"> <li className='lista01'>Bombando</li> </a>
                        <a href="netflix.com"><li className='lista01'>Minha Lista</li></a>
                        <a href="netflix.com"><li className='lista01'>Navegar por idiomas</li> </a>
                    </ul>
                </div>
                <div className='right'>
                    <AiOutlineSearch/>
                    <p>Infantil</p>
                    <MdOutlineNotificationsNone/>
                    <a href="option.jsx"><img src="./assents/emoji.jpg" alt="emoji" className='img' /></a>
                </div>
            </div>
        </div>
    )
}

export default Header 