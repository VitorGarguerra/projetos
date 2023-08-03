import React from 'react'

const Video =() => {
    return (
        <div>
            <video autoPlay loop className='video'>
                <source src="./assents/trailer.mp4" type="video/mp4"/>
            </video> 
            <div className='gradient' />
        </div> 
    )
}

export default Video