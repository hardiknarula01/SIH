import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// import Menu from '@mui/material/Menu';

// import IconButton from '@mui/material/IconButton';
// import LanguageIcon from '@mui/icons-material/Language';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Select, MenuItem } from '@mui/material';

const TopBar = ({transparent}) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = (language) => {
  //   setAnchorEl(null);
  //   if (language) {
  //     setSelectedLanguage(language);
  //   }
  // };

  return (
    //bgcolor: "#E8E8E8"
    <AppBar position="static"  sx={{ height: '44px',marginBottom:"10px" ,bgcolor: transparent ? 'transparent' : '#E8E8E8',
    color: transparent ? '#ffffff' : 'black', position:'fixed',zIndex:"50",boxShadow:"none"}} >
      <Toolbar sx={{ justifyContent: 'space-between' , minHeight: '48px !important', padding: '0 16px' }} >
        <Box display="flex" alignItems="center"  >
          <Typography variant="body1" sx={{ marginRight: 2, display: isSmallScreen ? 'none' : 'block',fontWeight: "medium" }}>
            
          </Typography>
          {/* <Typography variant="body1" sx={{ marginRight: 2, display: isSmallScreen ? 'none' : 'block', fontWeight: "medium"  }}>
            - 
          </Typography> */}
          <Typography variant="body1" sx={{ display: isSmallScreen ? 'none' : 'block', fontWeight: "medium"  }}>
            
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
      {/* <Typography variant="body1" sx={{ marginRight: 1, color: 'white' }}>
        Language:
      </Typography> */}
      <Select
        value={selectedLanguage}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }} 
        //borderColor: 'black'
        sx={{ color: transparent? 'white':'black', fontWeight: "medium",border: 'none',
    '&:focus': {
      border: 'none',
    },outline: 'none','.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'black',
              '& .MuiMenuItem-root': {
                color: 'white',
              },
            },
          },
        }}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Spanish">Spanish</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </Select>
      <Typography variant="body1" sx={{ marginLeft: 3, display: isSmallScreen ? 'none' : 'block', fontWeight: "medium"  }}>
      </Typography>
    </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
