import React, { useContext, useState } from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const {wish}=useContext(WishlistContext)
  const {basket}=useContext(BasketContext)
  function handleOpen() {
    setOpen(!open)
  }
  return (
    <nav id='navbar'>
      <div className="nav">
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        </div>
        <div className="navigations">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink >Shop</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/add">Admin</NavLink>
            </li>
            <li>
              <NavLink>Pages</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="carts">
        <NavLink to="/wish"><i class="fa-regular fa-heart"></i>
        <span className='wish'>{wish.length}</span>
        </NavLink>
        <NavLink to="/basket"><i class="fa-solid fa-cart-shopping"></i>
        <span className='wish'>{basket.length}</span>
        </NavLink>
        <NavLink><i class="fa-solid fa-magnifying-glass"></i>
          </NavLink>
        </div>
        <div onClick={()=>handleOpen()} className="bar">
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      
      <div className={`nav-media ${open ? "active-nav" : ""}`}>
      <div className="navigationss">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink >Shop</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/add">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/wish">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/basket">Basket</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
