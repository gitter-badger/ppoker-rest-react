import React from 'react';

import HomeLink from './Link';

function Header() {
  return (
    <header className="flex px-8 py-10 items-center justify-between">
      <h1 className="text-gray-900 text-3xl">
        <a href="/">ppoker</a>
      </h1>
      <nav className="w-2/4 max-w-md">
        <ul className="flex justify-between">
          <li>
            <HomeLink to="/home" active>
              Home
            </HomeLink>
          </li>
          <li>
            <HomeLink to="/about">About</HomeLink>
          </li>
          <li>
            <HomeLink to="/contact">Contact</HomeLink>
          </li>
        </ul>
      </nav>
      <div className="">
        <button className="mx-4 px-4 py-2 text-blue-600 shadow-md hover:shadow-lg font-semibold focus:outline-none">
          New Room
        </button>
      </div>
    </header>
  );
}

export default Header;
