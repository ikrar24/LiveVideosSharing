import React from "react"
import Navbar from "./Components/Navbar"
import HeroSection from "./Pages/LandingPage/HeroSection"
import Room from "./Pages/LandingPage/Room"
import FAQ from "./Pages/LandingPage/Qa"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import RoomInfo from "./Pages/RoomInfo"

const App = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="items-center flex justify-center w-[95%] flex-col">
        {/* NavBar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Room />
                <HeroSection />
                <FAQ />
              </>
            }
          />
          <Route path="/roominformation" element={<RoomInfo />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Toast Notify */}
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
