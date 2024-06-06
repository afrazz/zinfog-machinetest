import React from "react";
import { TTailwindMargin } from "types";

interface ISpacerProps {
  mClass?: TTailwindMargin;
}

const Spacer: React.FC<ISpacerProps> = ({ mClass = "mt-4" }) => {
  return <div className={mClass} />;
};

export default Spacer;
