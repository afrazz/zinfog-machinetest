import React from "react";

interface ITags {
  status: "Ready" | "Lab dropped" | "Partial Report";
}

const Tag: React.FC<ITags> = ({ status }) => {
  let statusColorCode;

  switch (status) {
    case "Ready":
      statusColorCode = "bg-tags-sucess";
      break;
    case "Lab dropped":
      statusColorCode = "bg-tags-dropped";
      break;
    case "Partial Report":
      statusColorCode = "bg-tags-partial";
      break;
    default:
      statusColorCode = "bg-primary";
  }

  return (
    <div className={`w-full px-4 py-2 ${statusColorCode} rounded-xl`}>
      {status}
    </div>
  );
};

export default Tag;
