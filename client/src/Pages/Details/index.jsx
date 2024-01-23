import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Details = () => {
  const {wish,addWish}=useContext(WishlistContext)
  const {addbasket}=useContext(BasketContext)
  const [product, setProduct] = useState(null)
  const {id}=useParams()

  async function getData() {
    const res=await axios(`http://localhost:3000/${id}`)
    setProduct(res.data)
  }
  useEffect(() => {
    getData()
  
    
  }, [])
  return (
    <>
     <Helmet>
      <title>details</title>
     </Helmet> 
     <div className="details">
      <div className="container">
        <div className="row">
          {
          product && 
          <div key={product._id} className="col-lg-4">
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
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </div>
          </div>
          }
          
        </div>
      </div>
     </div>
    </>
  )
}

export default Details
