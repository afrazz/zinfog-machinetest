import { logo, phoneIcon } from "constants/assets";
import React from "react";
import LoginAmbulanceBg from "./LoginAmbulanceBg";
import LoginForm from "./LoginForm";
import { FormError, Spacer } from "components/common";
import { useAppSelector } from "hooks/useStore";

const LoginCard: React.FC = () => {
  const { error } = useAppSelector((state) => state.auth);
  return (
    <div className="bg-white rounded-[45px] flex-hv-center max-lg:w-4/5 max-md:w-full w-1/2 flex-col py-9 relative">
      <LoginAmbulanceBg />
      <img src={logo} alt="logo" className="w-[195px] h-[50px]" />
      <Spacer mClass="mt-6" />

      <h3 className="text-2xl text-primary font-bold">Report Downlad portal</h3>
      <div className="mt-6"></div>
      <LoginForm />
      {error && <FormError msg={error} />}
      <Spacer mClass="mt-6" />

      <div className="flex items-center">
        <img src={phoneIcon} alt="call-icon" />
        <p className="font-bold text-2xl text-primary">(+91) 9288008801</p>
      </div>
      <Spacer mClass="mt-6" />

      <p className="max-sm: px-4 text-center">
        I hereby agree and accept the{" "}
        <span className="text-primary cursor-pointer">Terms of service</span>{" "}
        and <span className="text-primary cursor-pointer">Privacy policy</span>{" "}
      </p>
    </div>
  );
};

export default LoginCard;
