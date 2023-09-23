import VansListed from "./Vans-Admin/VansListed";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Axios from "axios";
export const Vans = () => {
  const { data } = useQuery(["vans"], async () => {
    const response = await Axios.get(`/api/host/vans`);
    return response.data.vans;
  });

  const VanLists = data
  ? data.map((vans) => (
    
      <div key={vans.id}>
          <Link to={`/host/vans/${vans.id}`}>
          <VansListed
            vanName={vans.name}
            vanType={vans.type}
            vanImage={vans.imageUrl}
            Price={vans.price}
            Popularity={vans.Popularity}
          />
          </Link>
      </div>
   
    ))
  : console.log("something is happening...");

  return (
    <div className="text-black w-full flex flex-col gap-8">
      <div className="w-full  p-2">
        <h1 className="text-2xl font-bold">Your listed vans</h1>
      </div>
      <div className="van-list-grid">
        {VanLists}
      </div>
    </div>
  );
};
