import React from 'react'
import {AiOutlineStar, AiOutlineLike} from 'react-icons/ai'

const Fly =() => {
    return (
        <div className='fly'>
            <section className='fly01'>
                <AiOutlineStar className='icon01'/>
                <h2><a href="http://localhost:3000/" className='titulo'>Conteúdo</a> de alta qualidade</h2>
                <p className='sub'>Baixe contúdos que chamam a atenção por sua qualidade incrível para dar aos seus projetos uma aparência profissional.</p>
            </section>
            <section className='fly02'>
                <AiOutlineLike className='icon01'/>
                <h2><a href="http://localhost:3000/" className='titulo'>Recursos</a> prontos para serem usados</h2>
                <p className='sub'>Acesse milhares de contúdos e conclua seu projeto duas vezes mais rápido.</p>
            </section>
            <section className='fly03'>
                <AiOutlineLike className='icon01'/>
                <h2><a href="http://localhost:3000/" className='titulo'>Resultados</a> de busca garantidos</h2>
                <p className='sub'>Há um conteúdo e um estilo para cada projeto, sejam quais forem suas necessidades.</p>
            </section>
        </div>
    )
}

export default Fly 