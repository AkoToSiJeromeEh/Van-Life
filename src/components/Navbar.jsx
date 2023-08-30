import { Link  } from "react-router-dom";
import brandLogo from '../icons/van-life-logo.png'
export const Navbar = () => {

  console.log(Link)
  return (
    <>
      <nav className="w-full-screen flex bg-custom-peach items-center p-9">
        <div className="nav-logo-brand">
          <img className="w-28" src={brandLogo} alt="" />
        </div>
        <div className="nav-links ms-auto ">
        <ul className="flex gap-5 font-bold">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

