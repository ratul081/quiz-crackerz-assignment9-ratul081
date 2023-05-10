import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-gray-100">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost normal-case text-xl md:text-xl lg:text-2xl">Quiz World</NavLink>
      </div>
      <div className="flex gap-2 space-x-3 text-sm lg:text-2xl md:text-xl mr-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/result" >Result</NavLink>
        <NavLink to="/blog" >Blog</NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
    </div>
  );
};

export default Header;