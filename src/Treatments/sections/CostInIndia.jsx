// import React from 'react'
// import CostSlider from '../components/CostSlider'
// import DoughnutChart from '../components/DoughnutChart'
// import StickyForm from '../components/StickyForm'

// const CostInIndia = ({ procedure }) => {
//   return (
//     <div className=' flex flex-col justify-center items-center w-full'>
//       <div className='flex text-3xl text-neutral-500 font-bold'>
//         <h1 className='text-cyan-500'>{procedure}&nbsp;</h1>cost in India
//       </div>

//       <div className='flex flex-row gap-8 w-full mx-4 my-8 bg-gradient-to-b from-cyan-500 px-8 rounded-xl py-8'>
//         <CostSlider />
//         <DoughnutChart />
//         <div className='basis-3/12' ></div>
//       </div>
//       <StickyForm/>
//     </div>
//   )
// }

// export default CostInIndia

import React from 'react'
import CostSlider from '../Components/CostSlider'
import DoughnutChart from '../Components/DoughnutChart'
import StickyForm from '../Components/StickyForm'

const CostInIndia = ({data}) => {
  return (
    <div className=' flex flex-col justify-center items-center w-full'>
      <div className='flex text-3xl text-neutral-500 font-bold'>
        <h1 className='text-cyan-500'>{data.departmentID.treatment}&nbsp;</h1>cost in 
        <h1 className='text-cyan-500'>&nbsp;{data.departmentID.country}</h1>
      </div>

      <div className='flex flex-row gap-8 w-full mx-4 my-8 bg-gradient-to-b from-cyan-500 px-8 rounded-xl py-8'>
        <CostSlider minCost={data} maxCost={data} />
        <DoughnutChart success={90}/>
        <div className='basis-3/12' ></div>
      </div>
      <StickyForm procedure={data.departmentID.treatment}/>
    </div>
  )
}

export default CostInIndia