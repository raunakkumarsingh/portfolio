import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const FACTSH = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
       Web Developer (Funded by Mozilla)
        <span className="text-textGreen tracking-wide">@FACTS-H</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        JAN 2024 - MARCH 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>Responsive Website: Developed a responsive website for Facts-H Lab with ReactJS
          
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span> Scalable Design: Used modular, component-based architecture for easy maintenance and scalability.
          
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Efficient Deployment: Set up Docker, automated GitHub actions, and configured Nginx on VPS.

        </li>
      </ul>
    </motion.div>
  );
};

export default FACTSH;
