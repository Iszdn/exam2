import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import FormAdd from '../../Components/Formik'
const AddPage = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState('')
  const [property, setProperty] = useState(null)
  async function getData() {
    const res=await axios("http://localhost:3000/")
    setData(res.data)
  }
  useEffect(() => {
    getData()
  
    
  }, [])
  async function deletetData(id) {
    const res=await axios.delete(`http://localhost:3000/${id}`)
    getData()
  }
  function typeOfItem(item) {
    if (typeof item === "string") {
      return item.toLowerCase()
    }
    else{
      return item
    }
  }
  return (
    <>
     <Helmet>
      <title>add</title>
     </Helmet> 
     <div className="add">
       <FormAdd getData={getData}/>
     <div className="filter">
      <input type="search"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
<div onClick={()=>setProperty({name:"title",asc:true})} className="btn">a-z</div>
<div onClick={()=>setProperty({name:"title",asc:false})} className="btn">z-a</div>
<div onClick={()=>setProperty({name:"price",asc:true})} className="btn">inc</div>
<div onClick={()=>setProperty({name:"price",asc:false})} className="btn">dec</div>
<div onClick={()=>setProperty({name:"title",asc:null})} className="btn">default</div>
     </div>
     <div className="table">
     <div className="overflow-x-auto">
  <table className="table">
 
    <thead>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
     {
      data && data
      .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a,b)=>{
        if (property && property.asc===true) {
          return typeOfItem(a[property.name])<typeOfItem(b[property.name]) ? -1 : (typeOfItem(b[property.name])<typeOfItem(a[property.name]) ? 1 : 0)
        }
        else if (property && property.asc===false) {
          return typeOfItem(a[property.name])>typeOfItem(b[property.name]) ? -1 : (typeOfItem(b[property.name])>typeOfItem(a[property.name]) ? 1 : 0)
        }
        else{
          return 0;
        }
      })
      .map(x=>
      <tr key={x._id}>
        <td><img src={x.image} alt="" /></td>
        <td>{x.title}</td>
        <td>{x.price}$</td>
        <td><i onClick={()=>deletetData(x._id)} class="fa-regular fa-trash-can"></i></td>
      </tr>
        )
     }
      
      
    </tbody>
  </table>
</div>
     </div>
     </div>
    
    </>
  )
}

export default AddPage
