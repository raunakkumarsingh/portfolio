import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:raunak.jsdivs@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          raunakkumar.india@gmail.com
        </p>
      </a>
      <div className="h-20"> </div>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
