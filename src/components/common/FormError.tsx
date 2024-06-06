import React from "react";

interface IFormError {
  msg: string;
}

const FormError: React.FC<IFormError> = ({ msg }) => {
  return <div className="text-base underline text-danger-dark">{msg}</div>;
};

export default FormError;
