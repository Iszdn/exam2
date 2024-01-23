import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
const Wish = () => {
  const {wish,deleteWish}=useContext(WishlistContext)
  const {addbasket}=useContext(BasketContext)
  return (
    <>
     <Helmet>
      <title>Wish</title>
     </Helmet> 
     <div className="wishlist">
      {
wish.length===0 ? <h2>wishlist is empty</h2> : 

<div className="wish">
  <div className="container">
    <h2>wishlist</h2>
    <div className="row">
     
        {
          wish && wish.map(product=>
            <div className="col-lg-4">
            <div className='card-prod'>
      <div className="img">
        <img src={product.image}alt="" />
        <div className="heart" onClick={()=>deleteWish(product)}>
        <i class="fa-solid fa-heart-circle-minus"></i>
        </div>
        <div onClick={()=>addbasket(product)}  className="btnn">
            Add to cart
        </div>
      </div>
      <div className="content">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </div></div>
            )
        }
      
      
    </div>
  </div>
</div>
      }
     </div>
    </>
  )
}

export default Wish
