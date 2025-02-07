import React from 'react'

const Credits = () => {
  return (
    <div className='w-full h-[100px] bg-black flex justify-center gap-[20px] items-center text-secondary'>
      <div>Website by Suyesh Shrestha</div>
      <div> - </div>
      <div>Models by <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-[#aa8aff] cursor-pointer" href="https://sketchfab.com/3d-models/nicolaus-copernicus-monument-cbccd5bdbb514bd7bda2bc9b26e0e4b2">Loïc Norgeot (Nicolaus Copernicus Monument)</a> & <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-[#aa8aff] cursor-pointer" href="https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525">NANO (A Windy Day)</a></div>
    </div>
  )
}

export default Credits