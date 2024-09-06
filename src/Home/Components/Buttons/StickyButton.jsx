import { styled } from '@mui/system';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '50%',
  right: '0rem',
  borderRadius: '0',
  height: 'max-content',
  padding: '16px',
  borderTopLeftRadius:'12px',
  borderBottomLeftRadius:'12px',
  background:'#ec7636',
  color:'white',
  border: '2px solid white',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#fc945b',
  },
}));

const ContactButton = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#1f2937', 
  
}));


const BookAppointmentButton = () => (
  <>
    <ContactButton to="/appointment">
      <StyledFab color='white' aria-label="Contact">
        <div className="hidden md:block ">
          <h1
            className="font-bold leading-none"
            style={{
              width: '10px',
              fontSize: '12px',
              wordWrap: 'break-word',
              letterSpacing: '4px',
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)', // Adjust rotation if needed
              transformOrigin: 'center', // Ensure rotation origin is centered
            }}
          >
            Contact Us
          </h1>
        </div>
      </StyledFab>
    </ContactButton>

  </>
);

export default BookAppointmentButton;
