import React from "react";
import { NavLink } from "react-router-dom";
const VansNav = () => {
  return (
    <nav className="mb-5 bg-custom-apricot p-3 w-fit rounded-md">
      <ul className=" flex flex-row gap-8">
        <li>
          <NavLink 
            to="." 
            end
            className={({isActive}) => isActive ? 'VansActive' : null}
            >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="pricing" 
          className={({isActive}) => isActive ? 'VansActive' : null}
          >
			Pricing
		</NavLink>
        </li>
        <li>
          <NavLink 
          to="photos"
		      className={({isActive}) => isActive ? 'VansActive' : null}
		  >
			Photos
		</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VansNav;
