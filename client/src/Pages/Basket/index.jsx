import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
const Basket = () => {
  const {wish,addWish}=useContext(WishlistContext)
  const {incbasket,deletebasket,setbasket,decbasket,subtotal,basket}=useContext(BasketContext)
  return (
    <>
     <Helmet>
      <title>Wish</title>
     </Helmet> 
     <div className="wishlist">
      {
basket.length===0 ? <h2>basket is empty</h2> : 

<div className="wish">
  <div className="container">
  <h2>Basket</h2>
    <div className="row">
      
        {
          basket && basket.map(product=>
            <div className="col-lg-4">
            <div className='card-prod'>
      <div className="img">
        <img src={product.image}alt="" />
        <div className="heart" onClick={()=>addWish(product)}>
{
    wish.some(x=>x._id===product._id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
}
        </div>
        <div onClick={()=>deletebasket(product)}  className="btnn">
          delete cart
        </div>
      </div>
      <div className="content">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div>
           <div onClick={()=>incbasket(product)}  className="btn">+</div>
           <div className="btn">{product.count}</div>
           <div onClick={()=>decbasket(product)}  className="btn">-</div>
        </div>
        <p><span>total:${product.total}</span></p>
      </div>
    </div></div>
            )
        }
      
      <p>subtotal:${subtotal}</p>
    </div>
  </div>
</div>
      }
     </div>
    </>
  )
}

export default Basket
