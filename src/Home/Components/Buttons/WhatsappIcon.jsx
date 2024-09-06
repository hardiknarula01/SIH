// import { styled } from '@mui/system';
// import { Fab } from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const WhatsAppFab = styled(Fab)(({ theme }) => ({
//   position: 'fixed',
//   bottom: '10px',
//   right: '10px',
//   borderRadius: '100%',
//   backgroundColor: '#25D366',
//   color: '#FFF',
//   textAlign: 'center',
//   padding: '10px',
//   '&:hover': {
//     backgroundColor: '#128C7E',
//   },
// }));

// const WhatsAppText = styled('div')({
//   fontSize: '0.8rem',
//   bottom: '20px',
//   right: '10px',
//   textTransform: 'uppercase',
//   color: '#FFF',
// });

// const WhatsAppButton = () => (
//   <a href="https://wa.me/your-whatsapp-number">
//     <WhatsAppText>Online</WhatsAppText>
//     <WhatsAppFab aria-label="WhatsApp">
//       <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
//     </WhatsAppFab>
//   </a>
// );

// export default WhatsAppButton;

import { styled } from '@mui/system';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppContainer = styled('div')({
  position: 'fixed',
  bottom: '5vw',
  right: '2px',
  textAlign: 'center',
  zIndex: '10',
});

const Emoji = styled('span')({
  fontSize: '0.8rem', // Adjust the font size here
});

const WhatsAppText = styled('div')({
  fontSize: '1rem',
  color: '#25D366',
  marginBottom: '5px',
  marginRight:'5px',
  fontWeight:'bold'
});

const WhatsAppFab = styled(Fab)(({ theme }) => ({
  borderRadius: '100%',
  backgroundColor: '#25D366',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
}));

const WhatsAppButton = () => (
  <WhatsAppContainer>
    <WhatsAppText>
      <Emoji>🟢</Emoji> Online
    </WhatsAppText>
    <a href="https://api.whatsapp.com/send?phone=917042046036&text=Hi%20MedWander%2C%20can%20you%20please%20provide%20me%20assistance%20regarding%3A" target='_blank'>
      <WhatsAppFab aria-label="WhatsApp">
        <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
      </WhatsAppFab>
    </a>
  </WhatsAppContainer>
);

export default WhatsAppButton;


