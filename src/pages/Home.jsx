import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CarsSection from '../components/home/CarsSection'
import { HeroCarOwner, HeroCustomer, HeroGuest } from '../components/home/Hero'
import Location from '../components/home/Loaction'
import Testimonial from '../components/home/Testimonial'
import WhyUs from '../components/home/WhyUs'

export default function Home() {
  const auth = useSelector((state) => state.auth)
  const [userType, setUserType] = useState('')

  useEffect(() => {
    setUserType(auth.user?.userType)
  }, [auth])

  if (auth.isAuthenticated && userType === 'CUSTOMER') {
    return (
      <>
        <HeroCustomer />
        <CarsSection />
        <WhyUs />
        <Testimonial />
        <Location />
      </>
    )
  }

  if (auth.isAuthenticated && userType === 'OWNER') {
    return <HeroCarOwner />
  }

  return (
    <>
      <HeroGuest />
      <WhyUs />
      <Testimonial />
      <Location />
    </>
  )
}
