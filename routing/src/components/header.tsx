import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="container flex items-center justify-between mx-auto h-14">
        <h1 className="font-bold text-2xl">Home</h1>
        <div className="flex gap-2">
          <h1>Performance</h1>
          <h1>Reliability</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
