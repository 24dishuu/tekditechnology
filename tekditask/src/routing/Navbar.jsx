import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './style.css'


class Navbar extends Component {
  render() {

    return (
      <div>


        <nav class='navbar' >
          


            <Link to="/" class="nav-link" href="#">Home</Link>

            <Link to='/About' class="nav-link" href="#">About</Link>

            <Link to='/Contact' class="nav-link" href="#">Contact</Link>


            <Link to='/Blog' class="nav-link" href="#">Blog</Link>


          
        </nav>

      
      </div>

    )
  }
}
export default Navbar;


