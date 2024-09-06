import React from "react";
import img0 from "../../Assets/Certification Logos/01 ISO Logo.png";
import img1 from "../../Assets/Certification Logos/02 JCI logo.png";
import img2 from "../../Assets/Certification Logos/03 NABH logo.png";
import img3 from "../../Assets/Certification Logos/04 ESMO logo.png";
import img4 from "../../Assets/Certification Logos/05 OECI logo.png";

const Certification = () => {
  const certificationLogos = [
    { id: 0, name: "ISO Logo", image: img0 },
    { id: 1, name: "JCI Logo", image: img1 },
    { id: 2, name: "NABH Logo", image: img2 },
    { id: 3, name: "ESMO Logo", image: img3 },
    { id: 4, name: "OECI Logo", image: img4 },
  ];

  return (
    <div className=" mx-auto py-8">
      <h1 className="text-4xl text-zinc-500 font-bold text-center mb-8">
        Certified <span className="text-sky-500">Hospitals Only</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-16 p-4">
        {certificationLogos.map((certification, index) => (
          <div
            key={certification.id}
            className="flex  flex-col  items-center gap-2" 
          >
            <div className={`flex items-center justify-center p-4 rounded-full overflow-hidden border-2 shadow-md ${
              index === certificationLogos.length - 1
                ? "col-span-2 sm:col-span-1"
                : "sm:col-span-1"
            }`}>
            <img
              src={certification.image}
              alt={certification.name}
              className="h-16 w-16 md:h-32 md:w-32 object-contain"
              />
              </div>
            <p className="text-zinc-500">{certification.name.split(" ")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
// import React from "react";
// import img0 from "../../Assets/Certification Logos/01 ISO Logo.png";
// import img1 from "../../Assets/Certification Logos/02 JCI logo.png";
// import img2 from "../../Assets/Certification Logos/03 NABH logo.png";
// import img3 from "../../Assets/Certification Logos/04 ESMO logo.png";
// import img4 from "../../Assets/Certification Logos/05 OECI logo.png";

// const Certification = () => {
//   const certificationLogos = [
//     { id: 0, name: "ISO Logo", image: img0 },
//     { id: 1, name: "JCI Logo", image: img1 },
//     { id: 2, name: "NABH Logo", image: img2 },
//     { id: 3, name: "ESMO Logo", image: img3 },
//     { id: 4, name: "OECI Logo", image: img4 },
//   ];

//   return (
//     <>
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl text-black font-bold text-center mb-8">
//           Certified <span className="text-black">Clinics Only</span>
//         </h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
//           {certificationLogos.map((certification) => (
//             <div
//               key={certification.id}
//               className="flex items-center justify-center p-4 rounded-lg overflow-hidden border shadow-md"
//             >
//               <img
//                 src={certification.image}
//                 alt={certification.name}
//                 className="h-16 w-16 md:h-24 md:w-24 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Certification;
