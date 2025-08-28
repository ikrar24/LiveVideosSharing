import React from "react"
import Navbar from "./Compinents/Navbar"
import HeroSection from "./Pages/LandingPage/HeroSection"
import Room from "./Pages/LandingPage/Room"
import FAQ from "./Pages/LandingPage/Qa"
import Footer from "./Compinents/Footer"


const App = () => {
  return (
    <>

      <div className=" flex items-center justify-center w-screen " >

        <div className=" items-center flex justify-center w-[95% flex-col " >
<Navbar/>
<Room/> 
<HeroSection/>
<FAQ/>
<Footer/>
        </div>

      </div>


    </>
  )
}

export default App
