import React, { useState } from 'react';
import TreatmentCard from './TreatmentCard';
import cardIcon from '../../Assets/Consmetic-surgery.png';
import './style.css';
import { Button, CircularProgress } from '@mui/material';

function TreatmentCardSection({ department, treatments, isLoading }) {
    const [visible,setVisible] = useState(2)
    console.log(visible);
    console.log('Department data:', department);
    console.log('Treatment data:', treatments);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[19rem]">
                <CircularProgress />
            </div>
        );
    }

    if (!treatments || treatments.length === 0) {
        return (
            <div className="flex justify-center items-center h-[19rem]">
                <p>No treatments found.</p>
            </div>
        );
    }

    
    const loadmore = ()=>{
        setVisible(prv=>prv+4)
    }

    return (
        <div className='flex flex-col'>
                <div className='grid lg:grid-cols-4 mt-14 mb-10 w-[100vw] gap-2 h-[19rem] overflow-x-scroll treatmentcontainer sm:grid-cols-2 md:grid-cols-3'>
                {treatments.slice(0,visible).map((treatment, treatmentIndex) => 
                treatment.countries.map((country, countryIndex) => {
                    const treatmentName = treatment.name;
                    const treatmentCountry = country.country;
                    const minimumCost = country.minimumCost;
                    const maximumCost = country.maximumCost;

                    return (
                        <TreatmentCard
                            key={`${treatmentIndex}-${countryIndex}`}
                            treatmentName={treatmentName}
                            treatmentCountry={treatmentCountry}
                            priceStart={minimumCost}
                            priceEnd={maximumCost}
                            imagePath={cardIcon}
                            _id={`${treatmentIndex}-${countryIndex}`}
                        />
                    );
                })
            )}
            </div>
            <Button onClick={loadmore} className='btn' >Load More</Button>
            </div>
    );
}

export default TreatmentCardSection;

// import React, { useState } from 'react';
// // import TreatmentData from '../../data/treatmentdata.json';
// import cardIcon from '../../../Assets/Consmetic-surgery.png';
// import TreatmentCard from './TreatmentCard';
// import './style.css'
// import { Button } from '@mui/material';

// function TreatmentCardSection({data}) {
//     const [visible,setVisible] = useState(4)
//     const loadmore = ()=>{
//         setVisible(prv=>prv+8)
//     }
//     return (
//         <>

//             <div className='grid lg:grid-cols-4  mt-14 mb-10 w-[100vw] gap-2 h-[19rem] overflow-x-scroll treatmentcontainer sm:grid-cols-2'>
//                 {data.slice(0,visible).map((treatment, index) => (
//                     <TreatmentCard
//                         key={index}
//                         treatmentName={treatment.treatment || treatment.treatment_name}
//                         treatmentCountry={treatment.country}
//                         // treatmentType={treatment.description}
//                         priceStart={treatment.maximumCost}
//                         priceEnd={treatment.minimumCost}
//                         imagePath={cardIcon}
//                         _id={treatment.treatment}
//                     />
//                 ))}
//                 <Button onClick={loadmore} className='btn'>Load More</Button>
//             </div>

//         </>
//     );
// }

// export default TreatmentCardSection;