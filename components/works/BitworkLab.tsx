import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Bitworklab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      NodeJS developer
        <span className="text-textGreen tracking-wide">@BitworkLab</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2022 - June 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          design & developed APIs for a CRUD application to support the upload and display of Excel file using
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented Excel file validation and JSON Web Tokens-based authentication for the REST API
        </li>
        
      </ul>
    </motion.div>
  );
};

export default Bitworklab;
