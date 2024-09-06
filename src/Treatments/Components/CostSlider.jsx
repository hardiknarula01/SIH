import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value) {
    return `$${value}`;
}

export default function CostSlider({minCost, maxCost}) {
    const [value, setValue] = useState([2000, 5000]);
    console.log("Value", value)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const sliderStyles = {
        '& .MuiSlider-thumb': {
            width: '28px',
            height: '28px',
            backgroundColor: '#FFBA00',
            border: '2px #FFBA00', // Thumb border color
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: '-12px',
                left: '-12px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(216, 216, 216, 0.2)', // Outer circle color
                zIndex: -1,
            },
            // '&::after': {
            //     content: '""',
            //     position: 'absolute',
            //     top: '50%',
            //     left: '50%',
            //     transform: 'translate(-50%, -50%)',
            //     width: '24px', // Inner circle size
            //     height: '24px', // Inner circle size
            //     borderRadius: '50%',
            //     backgroundColor: '#d8d8d8', // Inner circle color
            //     zIndex: 1,
            // },
        },
        '& .MuiSlider-track': {
            height: '15px',
            borderRadius: '4px',
            background: '#FFBA00',
        },
        '& .MuiSlider-rail': {
            height: '20px',
            borderRadius: '4px',
            backgroundColor: 'rgba(216, 216, 216, 0.8)',
        },
    };

    return (
        <div className='flex flex-col items-center justify-center bg-white border-2 rounded-xl shadow-md p-6 basis-3/12'>
            <h1 className='text-2xl font-semibold text-neutral-400 mb-12'>Treatment cost range</h1>
            <div className='w-96'>
                <Slider
                    value={value}
                    min={1000}
                    max={5000}
                    step={0}
                    // onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={sliderStyles}
                />
            </div>

            <div className='flex justify-between w-full mt-4'>
                <div className='text-center text-neutral-500'>
                    <p className='text-md'>Minimum Price</p>
                    <p className='text-lg font-semibold'>{`${value[0]}`}</p>
                </div>
              
                <div className='text-center text-neutral-500'>
                    <p className='text-md'>Maximum Price</p>
                    <p className='text-lg font-semibold'>{`${value[1]}`}</p>
                </div>
            </div>
        </div>
    );
}