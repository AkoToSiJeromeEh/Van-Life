import { NavLink } from "react-router-dom";
import brandLogo from "../icons/van-life-logo.png";
import useToggle from "../custom-hooks/useToggle";
import { VscListSelection, VscClose } from "react-icons/vsc";

export const Navbar = () => {
  const [isShowNav, setShowNav] = useToggle();

  return (
    <>
      <nav className="w-full-screen flex bg-custom-peach items-center p-9 justify-center text-center sticky top-0 main-nav z-50">
        <div className="nav-logo-brand flex-1">
          <img className="w-28" src={brandLogo} alt="" />
        </div>

        <div className="nav-button me-4">
          <button className=" align-middle" onClick={setShowNav}>
            {isShowNav ? (
              <VscClose size="30px" />
            ) : (
              <VscListSelection size="30px" />
            )}
          </button>
        </div>
        <div className={isShowNav ? "nav-links visible" : "nav-links"}>
          <ul className="flex gap-5 font-bold lg:text-black text-white">
            <li>
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "nav-link-active" : null }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="host"
                className={({isActive}) => isActive ? "nav-link-active" : null }
              >
                Host
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({isActive}) => isActive ? "nav-link-active" : null }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="vans"
                className={({isActive}) => isActive ? "nav-link-active" : null }
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
