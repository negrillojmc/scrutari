import React from 'react'
import StreamlineYourResearch from './services/StreamlineYourResearch'
import ServicesCoverPhoto from './services/ServicesCoverPhoto'
import ConsumerStories from './services/ConsumerStories'
import Pricing from './services/Pricing'
import PaymentFAQs from './services/PaymentFAQs'
import FeaturedServices from './services/FeaturedServices'
import SubscriptionBanner from './services/SubscriptionBanner'

const Services = () => {
  return (
    <div>
      <ServicesCoverPhoto />
      <StreamlineYourResearch />
      <ConsumerStories />
      <Pricing />
      <PaymentFAQs />
      <FeaturedServices />
      <SubscriptionBanner />
    </div>
  )
}

export default Services
