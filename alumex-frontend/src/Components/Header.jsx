// export default function Header(){
//     return(
//        <Header className="w-full bg-accent">
//        </Header>
//     )
// }



// import alumexLogo from "../assets/alumex-logo.png";

// export default function Header() {

//     return (

//         <header className="w-full h-16 bg-green-200 border-b border-green-200 flex items-center px-4 sm:px-6 md:px-8">
//             <img
//                 src={alumexLogo}
//                 alt="Alumex"
//                 className="h-10 w-auto object-contain"
//             />

//         </header>

//     );

// }


// import React from "react";
// import AluLogo from "../assets/Alumex-Logo.png";

// export default function Header() {
//     return (
//         <header className="h-20 bg-[#087136] border-b border-green-900/30">
//             <div className="h-full px-6 flex items-center justify-between">
//                 <img
//                     src={AluLogo}
//                     alt="Alumex"
//                     className="h-11 w-auto object-contain"
//                 />
//             </div>
//         </header>
//     );
// }




import React from "react";
import AluLogo from "../assets/Alumex-Logo.png";

export default function Header() {
  return (
    <header className="relative w-full h-24 flex items-center bg-white overflow-hidden shadow-sm">
      {/* Left Section: Logo Container */}
      <div className="z-10 pl-8 pr-12 py-2 flex items-center bg-white">
        <img
          src={AluLogo}
          alt="Alumex - Ultimate in Aluminium Profiles"
          className="h-14 w-auto object-contain"
        />
      </div>

      {/* Right Section: Gradient Background Banner */}
      <div className="flex-1 h-full relative bg-gradient-to-r from-[#81c784] via-[#4caf50] to-[#2e7d32]">
        {/* Soft white fade transition from the logo side */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        
        {/* Optional abstract overlay lines/texture */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-black pointer-events-none" />
      </div>
    </header>
  );
}