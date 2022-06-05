import React from 'react'
import Header from '../Components/Header'
import Collection from "../Components/Collection"
import Prodlist from "../Components/Prodlist"
import Body from "../Components/Body"
import Footer from '../Components/Footer'
function index() {
  return (
    <div>
      <Header/>
      <Prodlist/>
      <Body/>
      <Collection/>
      <Footer/>
    </div>
  )
}

export default index