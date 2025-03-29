import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Techclub from "./works/TechClub";
import Bitwork from "./works/BitworkLab";
import CDAC from "./works/Cdac";
import FACTSH from "./works/Factsh";
import Digiquanta from "./works/Digiquanta";

const Experience = () => {
  const [Cdac, setCdac] = useState(false);
  const [Factsh, setFactsh] = useState(false);
  const [BitworkLab, setBitworkLab] = useState(false);
  const [TechnicalClub, setTechnicalClub] = useState(false);
  const [DigiquantaState, setDigiquantaState] = useState(true);

  const handleCdac = () => {
    setCdac(true);
    setFactsh(false);
    setBitworkLab(false);
    setTechnicalClub(false);
    setDigiquantaState(false);
  };

  const handleFactsh = () => {
    setCdac(false);
    setFactsh(true);
    setBitworkLab(false);
    setTechnicalClub(false);
    setDigiquantaState(false);
  };

  const handleBitwork = () => {
    setCdac(false);
    setFactsh(false);
    setBitworkLab(true);
    setTechnicalClub(false);
    setDigiquantaState(false);
  };

  const handleTechClub = () => {
    setCdac(false);
    setFactsh(false);
    setBitworkLab(false);
    setTechnicalClub(true);
    setDigiquantaState(false);
  };

  const handleDigiquanta = () => {
    setCdac(false);
    setFactsh(false);
    setBitworkLab(false);
    setTechnicalClub(false);
    setDigiquantaState(true);
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
            onClick={handleDigiquanta}
            className={`${
              DigiquantaState
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Digiquanta
          </li>
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
            onClick={handleFactsh}
            className={`${
              Factsh
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            FACTS-H
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
        {DigiquantaState && <Digiquanta />}
        {Cdac && <CDAC />}
        {Factsh && <FACTSH />}
        {BitworkLab && <Bitwork />}
        {TechnicalClub && <Techclub />}
      </div>
    </section>
  );
};

export default Experience;
