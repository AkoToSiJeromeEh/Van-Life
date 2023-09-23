import Axios from "axios";
import VansNav from "../../../components/VansNav";
import { useParams, Link, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingAnim from "../../../components/LoadingAnim";
export const VansDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["vans", id],
    queryFn: () =>
      Axios.get(`/api/host/vans/${id}`).then((response) => response.data.vans),
    cacheTime: "5000",
    staleTime: "3000",
  });

  return (
    <>
      {isLoading ? (
        <LoadingAnim />
      ) : (
        <div className="text-black p-5 flex flex-col gap-[3rem]">
          <div className="button-container ">
            <Link
              className="border-b-stone-800 border-b"
              to=".."
              relative="path"
            >
              &larr; Back to all Vans
            </Link>
          </div>
          <div className="preview-container flex flex-col gap-5 bg-white p-5 rounded-md">
            <div className="flex flex-row items-center gap-5">
              <div className="img-container">
                <img
                  width="250px"
                  className="rounded-md"
                  src={data?.imageUrl}
                  alt=""
                />
              </div>
              <div className="vans-info ">
                <button className="bg-custom-tangerine text-white p-1 rounded-sm leading-tight">
                  {data?.type}
                </button>
                <h2 className="my-5 font-bold text-lg">{data?.name}</h2>
                <p>
                  $<span className="font-bold">{data?.price}</span>/day
                </p>
              </div>
            </div>
            <VansNav />
            <Outlet
              context={{
                name: data?.name,
                price: data?.price,
                imageUrl: data?.imageUrl,
                type: data?.type,
                descriptiom: data?.description,
                visibility: data?.visibility,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
