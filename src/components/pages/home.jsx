import React from 'react'
import Nav from '../n&h/nav'
import ShopByPrice from './ShopByPrice'
import ShopByCategory from './ShopByCategory '
import BackToSchoolSection from './BackToSchoolSection'
import Yt from './yt'
import ServiceHighlights from './ServiceHighlights '
import Footer from '../n&h/footer'



const home = () => {
  return (
    <>
      <Nav/>
      <ShopByPrice/>
        <Yt/>
        <ShopByCategory/>
        <BackToSchoolSection/>

        <ServiceHighlights/>
        <Footer/>
    </>
  )
}

export default home
