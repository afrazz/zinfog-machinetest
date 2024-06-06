import React from "react";
import LoginCard from "components/pages/login/LoginCard";

const Login: React.FC = () => {
  return (
    <div className="bg-[url('assets/images/bg-image.jpg')] bg-cover bg-center h-screen w-screen bg-no-repeat flex-hv-center">
      <LoginCard />
    </div>
  );
};

export default Login;
