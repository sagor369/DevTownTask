import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavbarItem = (
    <>
      <li >
        <NavLink className="text-primary" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul id="manuBar"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavbarItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl h-20">
          <img
            className="h-full"
            src="https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="manuBar" className="menu menu-horizontal px-1">{NavbarItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Registor</a>
      </div>
    </div>
  );
};

export default Navbar;
