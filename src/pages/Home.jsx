import bgImage from '../image/van-life-bg.png'; // Make sure 

const Home = () => {

  const backgroundImageStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(${bgImage}) no-repeat center center`
  };
  

  return (
    <div className="flex-1 p-8 h-full flex flex-col justify-center items-start	" style={backgroundImageStyle}>
      <div className='flex flex-col gap-6 shrink-0	w-2/3 txc ' >
     <div className='home-intro w-2/4'>
        <h1 className='font-extrabold text-3xl leading-10	'>
          You got the travel plans, we got the travel vans.
        </h1>
      </div>
      <div className='home-para w-2/3 '>
        <p className='leading-6	'>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
      </div>
      <div className='home-btn w-4/5'>
      <button className=' container-btn bg-custom-tangerine rounded-sm	p-2 font-bold '>
         GO
        </button>
      </div>
    </div>
  </div>
  );
};

export default Home;
