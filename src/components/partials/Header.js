import React from 'react'
import Image from '../../Images/logo.png'  // one layer up single dot two layers up 2dots

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
        <a class="navbar-brand" href="/">
      <div class="logo-image">
            <img src={Image} class="img-fluid"/>
      </div>Movie Ticket Booking
</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

        </div>
    )
}

export default Header
