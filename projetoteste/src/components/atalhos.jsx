import React from 'react'
import { AiOutlineSearch, AiOutlineVideoCamera, AiOutlineMessage, AiOutlineHeart, AiOutlineOrderedList } from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'


const Atalhos =() => {
    return (
        <div className='atalho'>
            <h3><a href=""><AiOutlineSearch/> Pesquisa</a></h3>
            <h3><a href=""><MdOutlineExplore/> Explorar</a></h3>
            <h3><a href=""><AiOutlineVideoCamera/> Reels</a></h3>
            <h3><a href=""><AiOutlineMessage/> Mensagens</a></h3>
            <h3><a href=""><AiOutlineHeart/> Notificações</a></h3>
            <h3><a href=""><AiOutlineOrderedList/> Pefil</a></h3>
        </div>  
    )
}

export default Atalhos