import { Outlet, NavLink } from "react-router-dom";
import { RiDashboard2Line } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import { AiOutlineComment } from "react-icons/ai";
import { LiaShuttleVanSolid } from "react-icons/lia";

export const HostLayout = () => {
  return (
    <div className="flex  gap-5 flex-col  bg-custom-peach flex-1">
      <nav className="nav-container text-black   ">
        <div className="host-links">
          <ul className="flex flex-row gap-6">
            <li>
              <NavLink
                to="."
                end
                className={({ isActive }) => (isActive ? "host-active" : null)}
              >
                <RiDashboard2Line className="inline me-2" size="25" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="income"
                className={({ isActive }) => (isActive ? "host-active" : null)}
              >
                <GiGrowth className="inline me-2" size="25" /> Income
              </NavLink>
            </li>
            <li>
              <NavLink
                to="vans"
                className={({ isActive }) => (isActive ? "host-active" : null)}
              >
                <LiaShuttleVanSolid className="inline me-2" size="25" /> Vans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => (isActive ? "host-active" : null)}
              >
                <AiOutlineComment className="inline me-2" size="25" /> Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className=" p-5">
        <Outlet />
      </div>
    </div>
  );
};
