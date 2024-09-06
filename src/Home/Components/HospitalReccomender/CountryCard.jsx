import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';

const CountryCard = ({ country, onSelect }) => {
  const HoverText = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer'
    }
  }));

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
            alt={country.name}
            image={country.image}
            sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
          <HoverText onClick={() => onSelect(country)}>Show Hospitals</HoverText>
        </div>
        <CardContent sx={{ height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{country.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CountryCard;
