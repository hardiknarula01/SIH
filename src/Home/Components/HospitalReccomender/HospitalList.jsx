// import React from 'react';
// import { Card, CardContent, Typography, CardMedia, Stack } from '@mui/material';

// const HospitalList = ({ hospitals }) => {
//   console.log("hosp", hospitals);

//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <Stack direction="row" spacing={2} sx={{ marginTop: 2  }}>
//         {hospitals.map((hospital, index) => (
//           <Card key={index} sx={{ 
//             display: 'flex', 
//             flexDirection: 'column', 
//             justifyContent: 'space-between',
//             boxShadow: 2, 
//             borderRadius: 2, 
//             width: '300px', // Fixed width for the card
//             flexShrink: 0 // Prevents shrinking
//           }}>
//             <CardMedia
//               component="img"
//               alt={hospital.name}
//               image={process.env.PUBLIC_URL + `/${hospital.image}`}
//               sx={{ 
//                 height: '200px', // Fixed height for the image
//                 objectFit: 'cover' 
//               }}
//             />
//             <CardContent sx={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'center', 
//               height: '120px', // Fixed height for the content
//               textAlign: 'center' 
//             }}>
//               <Typography variant="h6">{hospital.name}</Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Stack>
//     </div>
//   );
// };

// export default HospitalList;

import React from 'react';
import { Card, CardContent, Typography, CardMedia, Stack, Grid } from '@mui/material';

const HospitalList = ({ hospital }) => {
  console.log("hosp", hospital);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card sx={{ 
        margin: 1, 
        textAlign: 'center', 
        boxShadow: 3, 
        borderRadius: 2, 
        width: 255, // Increased width
        height: 255, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        position: 'relative', 
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '78%' }}>
          <CardMedia
            component="img"
            alt={hospital.name}
            image={hospital.image}
            sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
        <CardContent sx={{ height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant="" sx={{ fontWeight: 'bold' }}>{hospital.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HospitalList;
