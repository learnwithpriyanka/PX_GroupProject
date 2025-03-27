import React from "react";
import { Link } from "react-router-dom";
import "./heropage.css";
function Card(){
    return(
<div class="main1">
<div class="card1">
    
    <img src="/media/image/recycle.jpg" alt="Recycle Image"></img>
    <h3>Recycle with Us</h3>
    <p>Donate your used books and help reduce waste. We'll handle the rest.</p>
    <button class="donate-btn">Donate Now</button>
</div>
<div class="card1">
    
    <img src="/media/image/Eco-friendly.webp" alt="Recycle Image"></img>
    <h3>Eco-friendly</h3>
    <p>Discover how our recycling program benefits the environment and community</p>
    <button class="donate-btn">Get involved</button>
</div>
<div class="card1">
    
    <img src="/media/image/sustainable.png" alt="Recycle Image"></img>
    <h3>Sustainable Solutions</h3>
    <p>
    Our recycling services provide an easy way for you to contribute to a greener future</p>
    <button class="donate-btn">Recycle Now</button>
</div>
<div class="card1">
    
    <img src="/media/image/recycle.jpg" alt="Recycle Image"></img>
    <h3>Simple Steps to Recycle  </h3>
    <p>Explore the Process
    Follow our step-by-step guide to learn how you can participate in our book </p>
    <button class="donate-btn">Explore the process</button>
</div>
<div class="h2">
    <h3 >Recycling Made Easy</h3>
    <p>At Padhaixpress, we believe in making a difference. Our book recycling initiative is just one way we're working to create a more sustainable </p>
</div>
</div>

    )

}
export default Card;