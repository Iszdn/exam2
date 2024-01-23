import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import Card from '../../Card'
const OurProduct = () => {
  const [data, setData] = useState()

  async function getData() {
    const res=await axios("http://localhost:3000/")
    setData(res.data)
  }
  useEffect(() => {
    getData()
  
    
  }, [])
  return (
    <section id='products'>
      <div className="header">
        <h3>Popular Items</h3>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      </div>
      <div className="container">
        <div className="row">
          {
            data && data.map(product=>
                  <div key={product._id} className="col-lg-4 col-md-6 col-12">
<Card  {...product}/>
          </div>
              )
          }
      
        </div>
      </div>
    </section>
  )
}

export default OurProduct
