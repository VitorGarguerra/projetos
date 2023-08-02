import React from 'react'
import Header from './header'
import Left from './left'
import {AiOutlineSearch} from 'react-icons/ai'

const Video =() => {
    return (
        <div className='video-section'>
            <video autoPlay loop controls={false} className='video-element'>
                <source src="./assents/videocidade02.mp4" type="video/mp4"/>
            </video>
            <div className='text'>
                <Header/>
            </div>
            <div className='left'>
                <Left/>
            </div>

            <div className='center' >
                <h2>VitorEdits</h2>
                <h2>Crie momentos importantes com profissionais que se importe com você</h2>
                <p>Encontre o melhor profissional aqui</p>
                <input type="text" name="bucar" id="ibuscar" placeholder='Pesquise por Profissionais' className='input'/> <AiOutlineSearch className='icon'/>
            </div>
        </div>
    )
}

export default Video