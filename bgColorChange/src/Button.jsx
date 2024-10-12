import React from "react";

const Button = ({ bgColor, text, setBgColor }) => {
  const buttonBg = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  return (
    <button
      className={`${buttonBg[bgColor]} p-3 rounded-md w-fit my-2 text-2xl text-white`}
      type="button"
      onClick={() => setBgColor(bgColor)}
    >
      {text}
    </button>
  );
};

export default Button;
