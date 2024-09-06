
import { Table } from '@mui/material'
import React from 'react'
import BasicTable from '../Components/BasicTable'

const CostOfTreatment = ({data}) => {
  return (
    <div style={{width:"70%"}}>
        <div className='flex justify-center text-3xl text-neutral-500 font-bold m-8 '>
        Cost of <h1 className='text-cyan-500'>&nbsp;{data.departmentID.treatment}&nbsp;</h1> across the country
        </div>

        <div className='justify-start max-w-4xl ml-16 mt-6 '>
            <div className='text-lg text-neutral-700 mb-8 '>
            For patients planning to travel abroad it is useful to know the price in destinations
            popular with medical travellers. The price for {data.treatment} Chd in different
            countries is approximately:
            </div>

            <BasicTable data={data.costPerCountry}/>

            

        </div>
    </div>
  )
}

export default CostOfTreatment
