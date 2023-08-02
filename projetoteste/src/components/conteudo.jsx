import React from 'react'

const Conteudo =(props) => {
    return (
        <div className='conteudo'>
            {props.children}
        </div>
    )
}

export default Conteudo