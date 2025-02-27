 import React from 'react'
import Img1 from './Img1'
import Img2 from './Img2'
import Img3 from './Img3'
import Img4 from './Img4'
 
 const ImgComponents = () => {
   return (
    <>

<div className="md:hidden absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex justify-between gap-1">
          <Img1 width={86} height={71} />
          <Img2 width={86} height={71} />
          <Img3 width={86} height={71} />
        </div>

    <div className="hidden md:flex gap-2">
    <Img1 width={106} height={88} />
    <Img2 width={106} height={88} />
    <Img3 width={106} height={88} />
    <Img4 width={106} height={88} />
  </div>
    </>
   )
 }
 
 export default ImgComponents