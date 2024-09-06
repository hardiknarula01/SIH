// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(country, min, max) {
//   return {country, min, max};
// }

// const rows = [
//   createData('Turkey', 159, 6.0),
//   createData('Turkey', 159, 6.0),
//   createData('Turkey', 159, 6.0),
//   createData('Turkey', 159, 6.0),
//   createData('Turkey', 159, 6.0),
//   createData('Turkey', 159, 6.0),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 400 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Countries</TableCell>
//             <TableCell align="center">Min. Cost</TableCell>
//             <TableCell align="center">Max. Cost&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.country}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.country}
//               </TableCell>
//               <TableCell align="center">{row.min}</TableCell>
//               <TableCell align="center">{row.max}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(country, min, max) {
  return { country, min, max };
}

export default function BasicTable({ data }) {
  if (data.length === 0) {
    return null; // Don't render anything if data length is 0
  }

  const rows = data.map(item =>
    createData(item.name, item.minCost, item.maxCost)
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Countries</TableCell>
            <TableCell align="center">Min. Cost</TableCell>
            <TableCell align="center">Max. Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.country}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="center">{row.min}</TableCell>
              <TableCell align="center">{row.max}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}