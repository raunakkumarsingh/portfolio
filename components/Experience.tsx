import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Apple from "./works/TechClub";
import Google from "./works/BitworkLab";
import ReactBD from "./works/Cdac";


const Experience = () => {
  const [Cdac, setCdac] = useState(true);
  const [BitworkLab, setBitworkLab] = useState(false);
  const [TechnicalClub, setTechnicalClub] = useState(false);
 

  const handleCdac = () => {
    setCdac(true);
    setBitworkLab(false);
    setTechnicalClub(false);
   
  };

  const handleBitwork = () => {
    setCdac(false);
    setBitworkLab(true);
    setTechnicalClub(false);
    
  };

  const handleTechClub = () => {
    setCdac(false);
    setBitworkLab(false);
    setTechnicalClub(true);
  };
 
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCdac}
            className={`${
              Cdac
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CDAC
          </li>
          <li
            onClick={handleBitwork}
            className={`${
              BitworkLab
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
           Bitwork&nbsp;Lab
          </li>
          <li
            onClick={handleTechClub}
            className={`${
              TechnicalClub
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
           Tech&nbsp;Club
          </li>
         
        </ul>
        {Cdac && <ReactBD />}
        {BitworkLab && <Google />}
        {TechnicalClub && <Apple />}
        
      </div>
    </section>
  );
};

export default Experience;
