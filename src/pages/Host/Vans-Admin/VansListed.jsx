
import PropTypes from "prop-types";
const VansListed = (props) => {
	const {vanName , vanImage  , Popularity , Price} = props
  return (

	<>
	<div className="bg-white  p-5 rounded-lg ">
		<div className='flex flex-col gap-5 '>
			<img className='rounded-md '  src={vanImage} alt="" />
			<div className='flex-row flex w-full'>
				<div>
					<h2 className="font-bold text-lg">{vanName}</h2>
					<h3 className='text-md'>${Price}/day</h3>
				</div>
				<div className='ms-auto popularity'>
					<h2>
					Popularity
					</h2>
					<span  >
					#{Popularity}
					</span>
				</div>
			</div>
		</div>
		
	</div>
	</>
  )
}

export default VansListed
VansListed.propTypes = {
	vanName: PropTypes.string.isRequired,
	vanImage: PropTypes.string.isRequired,
	Price: PropTypes.number.isRequired,
	Popularity: PropTypes.string.isRequired,
  };