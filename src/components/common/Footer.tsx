import { phoneIcon } from "constants/assets";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light py-8 px-8 flex items-center justify-between flex-wrap gap-y-4">
      <p className="text-base text-gray">
        Copyright © 2023 Access Home Lab Solutions
      </p>
      <div className="flex items-center">
        <img src={phoneIcon} alt="call-icon" />
        <p className="font-bold text-2xl text-primary">(+91) 9288008801</p>
      </div>
      <p className="text-secondary">
        All Rights Reserved | Terms and Conditions | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
