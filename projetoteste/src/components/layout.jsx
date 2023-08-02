import React from 'react'
import Conteudo from './conteudo'
import Menu from './menu'
import Rodape from './rodape'


const Layout =(props) => {
    return (
        <div>
            <Menu/>
            <Conteudo>
            {props.children}
                
            </Conteudo>
            <Rodape/>
        </div>
    )
}

export default Layout