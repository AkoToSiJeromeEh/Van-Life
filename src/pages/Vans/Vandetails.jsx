import Axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingAnim from "../../components/LoadingAnim";
export const Vandetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["vans", id],
    queryFn: () =>
      Axios.get(`/api/vans/${id}`).then((response) => response.data.vans),
      cacheTime : '5000',
      staleTime : '3000'
  })

  return (
    <>
      {isLoading ? (

          <LoadingAnim/>
      ) : (
        <div className="p-5 text-black">
          <button className="mb-10 underline">Back to all vans</button>
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="self-center">
              <img
                className="rounded-md "
                src={data?.imageUrl}
                alt={data?.name}
              />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <div className="flex flex-row gap-5">
                <button className="bg-custom-tangerine text-white px-2 font-bold py-1 rounded-sm">
                  {data?.type}
                </button>
                <button className="bg-red-400 text-white px-2 font-bold py-1 rounded-sm">
                  {data?.Latest}
                </button>
              </div>
              <ul>
                <li className="text-2xl font-extrabold">{data?.name}</li>
                <li className="mt-2 tracking-wider bg-green-700 py-2 text-center font-bold text-white rounded-md">
                  ${data?.price}/day
                </li>
              </ul>
              <p className="leading-5">{data?.description}</p>
              <button className="bg-custom-tangerine text-white px-2 font-bold py-2 rounded-sm w-full lg:w-5/12 lg:self-start self-center">
                Rent this van
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
