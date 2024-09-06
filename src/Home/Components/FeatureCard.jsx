import React from 'react'


const FeatureCard = ({imgsrc, descr, title}) => {
  return (
    <div className='grid gird-rows-3  px-2 rounded-xl border-2 shadow-xl w-[20rem] h-[20rem] pb-4 justify-items-center items-center   '>

      <h1 className='text-xl font-semibold text-center text-zinc-600'>{title}</h1>
      <img src={imgsrc} className='h-[5rem] w-[5rem] ' alt='logo-why-choose-us'/>
      <p className='text-md text-center self-start text-wrap text-zinc-500 '>{descr}</p>
        
    </div>
  )
}

export default FeatureCard

