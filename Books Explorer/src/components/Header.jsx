import React from "react";
import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="h-16 flex items-center bg-orange-600 px-6  font-serif">
        <Link to="/" className="flex items-center gap-4">
          <SiBookstack color="white " size={50} />
          <h1 className="text-3xl text-white">Books Explorer</h1>
        </Link>
      </nav>
    </>
  );
};

export default Header;
