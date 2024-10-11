import React from "react";

const Card = ({ link, title, desc }) => {
  return (
    <>
      <div className="h-[350px] w-[250px] border border-black text-center rounded-lg p-5">
        <img src={link} alt={title} className="h-[250px] w-full object-cover" />
        <div className="desc">
          <h2 className="font-bold text-xl decoration-dotted">{title}</h2>
          <p className="text-md"> {desc}</p>
        </div>
      </div>
    </>
  );
};



export default Card;
