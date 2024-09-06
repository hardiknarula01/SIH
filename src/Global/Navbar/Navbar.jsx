// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { styled, alpha } from '@mui/material/styles';
// import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Logo_Final_2 from '../../Assets/Logo Final_2.png';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import axios from "axios"
// import { useNavigate } from "react-router-dom";

// function Navbar({ transparent, showSearch }) {
//   const [nav, setNav] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const navigate = useNavigate();

//   const openNav = () => {
//     setNav(!nav);
//   };

//   const handleChatBtnClick = () => {
//     if (!isButtonDisabled) {
//       toast.info("Experiencing high traffic, Please wait a moment.", {
//         position: toast.POSITION.TOP_CENTER,
//         onOpen: () => setIsButtonDisabled(true),
//         onClose: () => setIsButtonDisabled(false),
//       });
//     }
//   };

//   useEffect(() => {
//     const handler = setTimeout(async () => {
//       if (searchInput) {
//         try {
//           const response = await axios.get(`http://localhost:9000/home/search/?search=${searchInput}`);
//           const data = response.data;
//           console.log(data);

//           if (data) {
//             const treatments = data.treatments.map(treatment => ({ type: 'treatment', name: treatment.treatment, country:treatment.country }));
//             const doctors = data.doctors.map(doctor => ({ type: 'doctor', name: doctor.name }));
//             const hospitals = data.hospitals.map(hospital => ({ type: 'hospital', name: hospital.name }));

//             const combinedList = [
//               ...treatments,
//               ...doctors,
//               ...hospitals
//             ];

//             console.log(combinedList);
//             setSearchResults(combinedList);
//           }
//         } catch (error) {
//           console.error("Error fetching search results:", error);
//           setSearchResults([]);
//         }
//       } else {
//         setSearchResults([]);
//       }
//     }, 300);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [searchInput]);


//   const handleOption = (result) => {
//     if (result.type === 'treatment') {
//       console.log(`Navigating to treatment link for ${result.name}`);
//       navigate(`/treatment/${result.name}/${result.country}`);
//     } else if (result.type === 'hospital'){
      
//       console.log(`Handling other type: ${result.type} for ${result.name}`);
//       navigate(`/hospitals/${result.name}`);
//     }
//     else
//     {
//       console.log(`Handling other type: ${result.type} for ${result.name}`);
//       navigate(`/doctors/${result.name}`);
//     }
//   };

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     border: `1px solid ${alpha(theme.palette.common.black, 0.2)}`,
//     flexGrow: 1,
//     maxWidth: "400px",
//     transition: "opacity 0.5s ease-in-out",
//     opacity: showSearch ? 1 : 0,
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

//   return (
//     <div className={`sticky top-[35px] bottom-[20px] z-50 px-8 flex justify-between items-center h-20 ${transparent ? 'bg-transparent text-white' : 'bg-white shadow-lg'}`}>
//       <Link to="/">
//         <img src={Logo_Final_2} alt="Health Logo" className="h-12 inline mr-2" />
//       </Link>

//       {showSearch && (
//         <Search>
//           <SearchIconWrapper >
//             <SearchIcon  />
//           </SearchIconWrapper>
//           <StyledInputBase
//            key="search-input"
//             placeholder="Search…"
//             inputProps={{ 'aria-label': 'search' }}
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
            
//           />
//           {searchResults.length > 0 && (
//               <div className="absolute top-full left-0 right-0 bg-white border border-neutral-400 rounded-lg mt-1 z-10 text-black">
//                 {searchResults.map((result, index) => (
//                   <div
//                     key={index}
//                     className="p-2 hover:bg-gray-200 cursor-pointer"
//                     onClick={() => handleOption(result)}
//                   >
//                     {`${result.name} (${result.type})`}
//                   </div>
//                 ))}
//               </div>
//             )}
//             </Search>
//           )}

//           {/* Desktop */}
//           <ul className="hidden md:flex space-x-8 font-medium text-lg items-center">
//             <li>
//               <Link to="/" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Home</Link>
//             </li>
//             <li>
//               <Link to="/treatment" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Treatments</Link>
//             </li>
//             <li>
//               <Link to="/doctor" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Doctors</Link>
//             </li>
//             <li>
//               <Link to="/hospital" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Hospitals</Link>
//             </li>
//             <li>
//               <Link to="/defaultblog" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Blogs</Link>
//             </li>
//             <button className="bg-[#e97132] text-white p-3 w-56 rounded-[15px]">Get a Free Quote</button>
//           </ul>

//           {/* Mobile */}
//           <div className={`fixed inset-0 bg-white z-20 flex flex-col justify-center items-center transition-transform duration-500 transform ${nav ? "translate-x-0" : "-translate-x-full"}`}>
//             <div onClick={openNav} className="absolute top-7 right-7">
//               <FontAwesomeIcon icon={faXmark} className="w-6 h-6 cursor-pointer hover:text-red-500" />
//             </div>

//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </Search>

//             <ul className="space-y-6 text-2xl font-semibold text-center">
//               <li>
//                 <Link onClick={openNav} to="/" className="hover:text-blue-400">Home</Link>
//               </li>
//               <li>
//                 <a onClick={openNav} href="#services" className="hover:text-blue-400">Services</a>
//               </li>
//               <li>
//                 <a onClick={openNav} href="#about" className="hover:text-blue-400">About</a>
//               </li>
//               <li>
//                 <a onClick={openNav} href="#reviews" className="hover:text-blue-400">Reviews</a>
//               </li>
//               <li>
//                 <a onClick={openNav} href="#doctors" className="hover:text-blue-400">Doctors</a>
//               </li>
//               <li>
//                 <a onClick={openNav} href="#contact" className="hover:text-blue-400">Contact</a>
//               </li>
//             </ul>
//           </div>

//           {/* Hamburger Icon */}
//           <div className="md:hidden">
//             <FontAwesomeIcon
//               icon={faBars}
//               onClick={openNav}
//               className="w-6 h-6 cursor-pointer hover:text-blue-400"
//             />
//           </div>
//         </div>
//       );
// }

//       export default Navbar;


import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Logo_Final_2 from '../../Assets/Logo_Final_2.png';
import Logo_Final_2 from '../../Assets/Logo_Final_2.png';
import axios from "axios";

function Navbar({ transparent, showSearch }) {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchInput) {
        try {
          const response = await axios.get(`http://localhost:9000/home/search/?search=${searchInput}`);
          const data = response.data;
          console.log(data);

          if (data) {
            const treatments = data.treatments.map(treatment => ({ type: 'treatment', name: treatment.treatment, country: treatment.country }));
            const doctors = data.doctors.map(doctor => ({ type: 'doctor', name: doctor.name }));
            const hospitals = data.hospitals.map(hospital => ({ type: 'hospital', name: hospital.name }));

            const combinedList = [
              ...treatments,
              ...doctors,
              ...hospitals
            ];

            console.log(combinedList);
            setSearchResults(combinedList);
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  const handleOption = (result) => {
    if (result.type === 'treatment') {
      console.log(`Navigating to treatment link for ${result.name}`);
      navigate(`/treatment/${result.name}/${result.country}`);
    } else if (result.type === 'hospital') {
      console.log(`Handling other type: ${result.type} for ${result.name}`);
      navigate(`/hospitals/${result.name}`);
    } else {
      console.log(`Handling other type: ${result.type} for ${result.name}`);
      navigate(`/doctors/${result.name}`);
    }
  };

  const handleSearchInputChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  return (
    <div className={`sticky top-[35px] bottom-[20px] z-50 px-8 flex justify-between items-center h-20 ${transparent ? 'bg-transparent text-white' : 'bg-white shadow-lg'}`}>
      <Link to="/">
        <img src={Logo_Final_2} alt="Spartan Logo" className="h-12 inline mr-2 border-xs rounded-full" />
      </Link>

      {showSearch && (
        <div className="relative flex-grow max-w-[400px] transition-opacity duration-500 ease-in-out opacity-100">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            key="search-input"
            type="text"
            placeholder="Search…"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 z-10 text-black">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOption(result)}
                >
                  {`${result.name} (${result.type})`}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Desktop */}
      <ul className="hidden md:flex space-x-8 font-medium text-lg items-center">
        <li>
          <Link to="/" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Home</Link>
        </li>
        <li>
          <Link to="/treatment" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Alumini </Link>
        </li>
        <li>
          <Link to="/doctors" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Success Stories</Link>
        </li>
        <li>
          <Link to="/hospitals" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Community</Link>
        </li>
        <li>
          <Link to="/defaultblog" className="hover:text-[#e97132] hover:underline hover:underline-offset-1 focus:text-[#e97132]">Donation</Link>
        </li>
        <button className="">Innovation</button>
      </ul>

      {/* Mobile */}
      <div className={`fixed inset-0 bg-white z-20 flex flex-col justify-center items-center transition-transform duration-500 transform ${nav ? "translate-x-0" : "-translate-x-full"}`}>
        <div onClick={openNav} className="absolute top-7 right-7">
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6 cursor-pointer hover:text-red-500" />
        </div>

        <div className="relative w-full max-w-[400px] mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search…"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <ul className="space-y-6 text-2xl font-semibold text-center">
          <li>
            <Link onClick={openNav} to="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <a onClick={openNav} href="#services" className="hover:text-blue-400">Services</a>
          </li>
          <li>
            <a onClick={openNav} href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews" className="hover:text-blue-400">Reviews</a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors" className="hover:text-blue-400">Doctors</a>
          </li>
          <li>
            <a onClick={openNav} href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="w-6 h-6 cursor-pointer hover:text-blue-400"
        />
      </div>
    </div>
  );
}

export default Navbar;