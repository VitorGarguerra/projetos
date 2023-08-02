import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'

const Biblioteca =() => {
    return (
        <div className='biblioteca'>
        <h2 className='bibli'>Sua Bilblioteca <AiOutlinePlus/></h2> 
        <div className='criar'>
            <h3>Crie sua primeira playlist</h3>
            <br/>
            <p>é fácil, vamos te ajudar.</p>
            <div className='play'><h4>Criar playlist</h4></div>
        </div>
        <div className='criar'>
            <h3>Que tal seguir um novo podcast novo?</h3>
            <br/>
            <p>Avisaremos você sobre novos episódios.</p>
            <div className='explore'><h4>Explore podcasts</h4></div>
        </div>
        <h4 className='footer'><TbWorld/> Potugues do Brasil</h4>
        </div>

    )
}

export default Biblioteca