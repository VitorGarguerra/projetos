import React from 'react'
import StoriesItem from './storie-item'

const Stories =() => {
    return (
        <div className='stories'>
        
        <div className='horizontal'>
        <StoriesItem name='Vitor'/>
        <StoriesItem name='Pedro'/>
        <StoriesItem name='Ana'/>
        <StoriesItem name='José' />
        <StoriesItem name='Leticia'/>
        <StoriesItem name='João' />
        <StoriesItem name='Gabriela'/>
        <StoriesItem name='Augusto'/>
        </div>
        </div>

    )
}

export default Stories