import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="foot-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
            <div className="logo">
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        </div>
        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.
</p>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Offers & Discounts</Link>
                </li>
                <li>
                  <Link>Get Coupon</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
            <h3>New Products</h3>
              <ul>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Offers & Discounts</Link>
                </li>
                <li>
                  <Link>Get Coupon</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
            <h3>Support</h3>
              <ul>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Offers & Discounts</Link>
                </li>
                <li>
                  <Link>Get Coupon</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
<p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <span>Colorlib</span>

</p>
            </div>
            <div  className="col-lg-6 col-md-6 col-12">
              
              <div className="sosials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-behance"></i>
              <i class="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
