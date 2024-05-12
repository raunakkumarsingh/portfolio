import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const TechClub = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer
        <span className="text-textGreen tracking-wide">@TechClub</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2021 - september 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborate and coordinate with fellow , Batch mates & seniors from different background and skills.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Creating and developing dynamic websites with various specifications and work on features such as payment gateway etc.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed in Multiple College fest websites & apps
        </li>
       
      </ul>
    </motion.div>
  );
};

export default TechClub;
