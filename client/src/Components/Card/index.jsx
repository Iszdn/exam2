import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'
const Card = (product) => {
    const {wish,addWish}=useContext(WishlistContext)
    const {addbasket}=useContext(BasketContext)
  return (
    <div className='card-prod'>
      <div className="img">
        <img src={product.image}alt="" />
        <div className="heart" onClick={()=>addWish(product)}>
{
    wish.some(x=>x._id===product._id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
}
        </div>
        <div onClick={()=>addbasket(product)}  className="btnn">
            Add to cart
        </div>
      </div>
      <div className="content">
        <h3><Link to={product._id}>{product.title}</Link></h3>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default Card
