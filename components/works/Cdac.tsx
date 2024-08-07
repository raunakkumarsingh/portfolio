import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Cdac = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
       Project Engineer (Quantum Computing)
        <span className="text-textGreen tracking-wide">@CDAC</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        March 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>Contributed to the development of a quantum network simulator.
          
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>Enhanced quantum circuit and algorithm execution on GPUs for higher qubit performance
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Explored cutting-edge quantum technology and high-performance computing
        </li>
      </ul>
    </motion.div>
  );
};

export default Cdac;
