import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center">Logo</div>

      <nav className="flex-center gap-2">
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </nav>

      <div>
        <p>search</p>
      </div>
    </header>
  );
};

export default Header;
