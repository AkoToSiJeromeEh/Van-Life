import Vanlist from "./Vans/Vanlist";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export const Vans = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["vans"],
    queryFn: () =>
      Axios.get("/api/vans").then((response) => response.data.vans),
  });
  
   const VanListElements = data
    ? data.map((vans) => (
        <div key={vans.id}>
          <Link to={`/vans/${vans.id}`}>
            <Vanlist
              vanName={vans.name}
              vanType={vans.type}
              vanImage={vans.imageUrl}
              Price={vans.price}
              Latest={vans.Latest}
            />
          </Link>
        </div>
      ))
    : console.log("something is happening...");

  return (
    <>
      {isLoading ? (
        <div className="flex items-center  justify-center m-auto w-full h-5/6">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="text-custom-charcoal">
          <div className="van-filter p-5 flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Explore our van options</h1>
            <ul className="flex flex-row gap-5 filter-type-vans">
              <li>Simple</li>
              <li>Luxury</li>
              <li>Rugged</li>
              <button>Clear filters</button>
            </ul>
          </div>
          <div className="p-5 mt-3 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3 md:grid-cols-2">
            {VanListElements}
          </div>
        </div>
      )}
    </>
  );
};



