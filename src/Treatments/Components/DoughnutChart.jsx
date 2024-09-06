import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { color } from 'framer-motion';

const chartColors =['#02B2AF', '#989c99']

const data = [
  { name: 'Success Rate', value: 90, color:chartColors[0] },
  { name: 'Failure Rate', value: 10, color:chartColors[1] },
];

const size = {
  width: 170,
  height: 150,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: "#5d5e5e",
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 25,
  fontWeight: "bold",
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  
  // Adjust vertical alignment to center the label better
  const adjustedCenterX = centerX + 70; // You may need to adjust this value based on your chart's layout

  return (
    <StyledText x={adjustedCenterX} y={centerY}>
      {children}
    </StyledText>
  );
}

const DoughnutChart = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white border-2 rounded-xl shadow-md p-6 basis-5/12 mr-8'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-semibold text-neutral-400'>Success Rate</h1>
        <PieChart
          series={[
            {
              data,
              innerRadius: 40,
              outerRadius: 60,
              paddingAngle: 1,
              cornerRadius: 1,
              startAngle: 0,
              endAngle: 360,
              cx: 100,
              cy: 70,
            },
          ]}
          {...size}
        >
          <PieCenterLabel>{`${data[0].value}%`}</PieCenterLabel>
        </PieChart>
      </div>
      <div className='flex justify-between w-full mt-4 items-center px-6'>
        <div className='text-center'>
          <p className='text-md text-neutral-600'>Days in Hospital</p>
          <p className='text-2xl font-semibold text-cyan-500'>2 Days</p>
        </div>
        <div className='border-l-2 border-dotted border-neutral-500 h-12 mx-4'></div>
        <div className='text-center'>
          <p className='text-md text-neutral-600'>Days Outside Hospital</p>
          <p className='text-2xl font-semibold text-cyan-500'>10 Days</p>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;