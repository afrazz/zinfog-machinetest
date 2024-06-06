import { ambulanceIcon } from "constants/assets";
import React from "react";

const LoginAmbulanceBg: React.FC = () => {
  return (
    <>
      <img
        src={ambulanceIcon}
        className="max-md:hidden absolute top-9 left-9"
        width={30}
        height={30}
      />
      <img
        src={ambulanceIcon}
        className="max-md:hidden absolute top-20 right-9"
        width={60}
        height={60}
      />
      <img
        src={ambulanceIcon}
        className="max-md:hidden absolute bottom-9 left-9"
        width={80}
        height={80}
      />
    </>
  );
};

export default LoginAmbulanceBg;
