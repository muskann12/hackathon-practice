import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Herosec from '@/components/Herosec'
import Logosec from '@/components/Logosec'
import Explore from '@/components/Explore'
import Achivements from '@/components/Achivements'
import Courses from '@/components/Courses'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testinomials'
const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosec />
     <Logosec />
     <Explore />
     <Achivements />
     <Achivements />
     <Courses />
     <Team />
     <Testimonials />
     <Footer />
    </div>
  )
}

export default page