import React from 'react'
import Awrapper from '../about/Awrapper'
import Back from '../common/back/Back'
import PricingCard from './PricingCard'
import './pricing.css'
import Faq from './Faq'

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan'/>
      <Faq/>
      <section className="price padding">
        <div className="container grid">
            <PricingCard/>
        </div>
      </section>
      <Awrapper/>
    </>
  )
}

export default Pricing
