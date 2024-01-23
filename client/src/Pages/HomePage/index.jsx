import React from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomePageComp/Header'
import OurProduct from '../../Components/HomePageComp/OurProduct'
import New from '../../Components/HomePageComp/New'
import WatchOf from '../../Components/HomePageComp/WatchOfChoice'
const HomePage = () => {
  return (
    <>
     <Helmet>
      <title>home</title>
     </Helmet> 
     
     <Header/>
     <New/>
     <OurProduct/>
     <WatchOf/>
    </>
  )
}

export default HomePage
