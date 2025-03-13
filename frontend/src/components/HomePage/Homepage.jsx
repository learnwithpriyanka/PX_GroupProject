import React from 'react'
import Hero from './Hero';
import Footer from '../../Footer';
import Hero1 from './Hero1';


function Homepage() {
    return ( 
        <div>
           <Hero1/>
            <Hero/>
            <Footer/>
        </div>
     );
}

export default Homepage;