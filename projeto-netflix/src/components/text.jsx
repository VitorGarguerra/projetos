import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const Text =() => {
    return (
        <div>
            <div className='text'>
                <h1>Caminhos da Selva</h1>
                <p className='text01'>Um grupo diversificado de aventureiros é reunido por circunstâncias inesperadas e se vê perdido na imensidão selvagem de uma floresta tropical exuberante e misteriosa.</p>
            </div>
            <div className='button'>
                <a href="Assistir" className='button01'><FaPlay className='icon01'/> Assistir</a>
                <a href="Mais Informações" className='button02'><AiOutlineInfoCircle className='icon02'/> Mais Informações</a>
            </div>
        </div>
    )
}

export default Text 