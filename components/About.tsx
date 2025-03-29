import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Raunak Kumar Singh, and I am a passionate Software Engineer with a strong foundation in Computer Science and Engineering. I enjoy creating innovative solutions and exploring cutting-edge technologies, particularly in the fields of Blockchain, Generative AI, and Quantum Computing.
          </p>
          <p>
            I have hands-on experience in developing decentralized applications, smart contracts, and AI-powered tools. My expertise spans across various domains, including Blockchain, AI/ML, and full-stack development. I am always eager to take on challenging projects that push the boundaries of technology.
          </p>
          <p>
            In the AI domain, I have worked extensively on Generative AI, LLM fine-tuning, OCR systems like PaddleOCR and EasyOCR, and real-time object detection using YOLOv8. I have also developed AI-powered tools such as medical data extraction systems, chatbots, and video narration tools, leveraging models like LLaMA, Qwen, and OpenAI API.
          </p>
          <p>Here are a few technologies and tools I have been working with recently:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              C++
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              GenAI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              OCR
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              ML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Prompt&nbsp;Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Fine-tuning
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              YOLO
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Nginx
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              LLaMA
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              DBMS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Ollama
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              TTS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Docker
            </li>
            </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
