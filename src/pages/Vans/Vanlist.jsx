import PropTypes from "prop-types";
 const Vanlist = (props) => {

  const {vanName , vanImage , vanType , Price , Latest} = props


  return (
  
      <div>
        <div className="van-image mb-2 relative ">
          <img className="w-full rounded-md " src={vanImage} alt="" />
          <button style={{Latest}} className="bg-red-400 px-3 py-1 rounded-lg font-bold text-white absolute top-3 z-10 left-3">
            {Latest}
          </button>
        </div>
        <div className="van-info  ">
          <ul className="flex flex-row gap-8 ">
            <li className="font-bold">{vanName}</li>
            <li className="ms-auto tracking-wides text-green-500 font-bold">${Price}/day</li>
          </ul>
        </div>
        <div className="van-type mt-3">
          <button className="bg-custom-tangerine text-white px-3 py-1 rounded-md">
            {vanType}
          </button>
        </div>
      </div>
  );
};
export default Vanlist
Vanlist.propTypes = {
  vanName: PropTypes.string.isRequired,
  vanType: PropTypes.string.isRequired,
  vanImage: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  Latest : PropTypes.string.isRequired
};
