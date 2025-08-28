import React from "react"


const HeroSection = () => {
  return (
    <>


    <section className=" mt-16 w-full flex items-center justify-center flex-col relative z-0 ">

<div className=" flex items-center justify-center flex-wrap gap-3 " >
<h1 className=" text-gray-300 text-3xl md:text-4xl text-center font-semibold " > Wacth Live Movies/Videos With Your </h1> <span className=" bg-black p-2  rounded-t-xl rounded-l-3xl rounded-br-sm text-gray-300 text-3xl md:text-4xl text-center font-semibold  ">Partner</span>
</div>




{/* HeroSection img/videos  */}

<div className="w-full flex items-center justify-center  mt-5  h-[40vh] md:h-auto tb:h-auto sm:h-auto  ">
  <div className="flex items-center justify-center w-[85%] h-[80vh] relative ">
      <video 
  src="https://res.cloudinary.com/dq2hmndgb/video/upload/v1724592636/lv_0_20250825143026_vfea8r.mp4" 
  autoPlay 
  
  loop 
  muted
  className="w-full h-full object-contain rounded-xl shadow-lg">
</video>



  </div>
</div>











    </section>
    </>
  )
}

export default HeroSection
