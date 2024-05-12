import { dsasheet, portfolio, textutils } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://dsasheet.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={dsasheet}
                alt="dsasheet"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">DSASHEET</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Website has SignUp, Login & LogOut functionalities along with Authentication using JWT. Each user’s data will be stored in the database(MongoDB).The password of the user is also secured by BcryptJS package of NodeJS for hashing the password of the user.<span className="text-textGreen">stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>JWT Auth</li>
              <li>Bootstrap</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/raunakkumarsingh/Faraj-Sheet"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
             
              <a
                className="hover:text-textGreen duration-300"
                href="https://dsasheet.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://raunak.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={portfolio}
                alt="portfolio"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Portfolio</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            An online portfolio (may also be called a digital portfolio or e-portfolio) is an online representation of work you have created, as well as your skills and experiences.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/raunakkumarsingh/portfolio"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              
              <a
                className="hover:text-textGreen duration-300"
                href="https://raunak.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://raunakkumarsingh.github.io/Text_util/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={textutils}
                alt="textutils"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Text-Utils</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            Text-utils remove comment from program code and provide some information about code.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/raunakkumarsingh/Text_util"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
             
              <a
                className="hover:text-textGreen duration-300"
                href="https://raunakkumarsingh.github.io/Text_util/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
