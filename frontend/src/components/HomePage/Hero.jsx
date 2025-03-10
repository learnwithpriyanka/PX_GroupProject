import React from 'react'
import './homepage.css'

function Hero() {
    return ( 
        <>

        
        
        
        <div className='cards-containar'>
            
            <div className='card'>
                <img src='media/image/notes.jpg' alt='img' className='card-img'></img>
                <h2 className='card-title'>Notes</h2>
                <p className='card-info'>go though</p>
            </div>

            <div className='card'>
                <img src='media/image/workbook.jpg' alt='img' className='card-img'></img>
                <h2 className='card-title'>Notes</h2>
                <p className='card-info'>go though</p>
            </div>

            <div className='card'>
                <img src='media/image/recycle.jpg' alt='img' className='card-img'></img>
                <h2 className='card-title'>Notes</h2>
                <p className='card-info'>go though</p>
            </div>

            <div className='card'>
                <img src='media/image/recycle.jpg' alt='img' className='card-img'></img>
                <h2 className='card-title'>Notes</h2>
                <p className='card-info'>go though</p>
            </div>

            
        </div>
        </> 

    
    );
}

export default Hero;