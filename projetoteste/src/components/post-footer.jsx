import React from 'react'
import {AiOutlineHeart, AiOutlineMessage, AiOutlineSend, AiOutlineFlag} from 'react-icons/ai'
import Comentario from './comentario'


const PostFooter =() => {
    return (
        <div className='post-footer'>
            <div className='acao'>
                <div className='acao-left'>
                    <a href="#">
                    <AiOutlineHeart/>
                    </a>
                    <a href="#">
                    <AiOutlineMessage/>
                    </a>
                    <a href="#">
                    <AiOutlineSend/>
                    </a>
                </div>
                <div className='acao-right'>
                    <a href="#">
                        <AiOutlineFlag/>
                        </a>
                </div>
                
            </div>
            <div className='description'>
                <h4>Champions League</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, asperiores fugiat error quam veniam velit sed numquam placeat officia quaerat repellendus, voluptas et minima labore quibusdam. Impedit ad velit consequatur.</p>
            </div>
            <Comentario/>
        </div>

    )
}

export default PostFooter