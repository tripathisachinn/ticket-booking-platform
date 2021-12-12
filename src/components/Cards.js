import React from 'react'
import '../components/Cards.css'
import Image from '../Images/image.jpg'


const Cards = () => {
    return (
        <div>
            <div class="card m-5 sachin" style={{width: "18rem"}}>
                <div className='image-container'><img src={Image} class="card-img-top" alt="..."/></div>
  
  <div class="card-body">
    <h5 class="card-title" >Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}

export default Cards
