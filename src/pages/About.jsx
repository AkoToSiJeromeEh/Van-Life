import ImageAbout from '../image/van-life-about.png'
const About = () => {
  return (

    <>
       <div className='about-wrapper flex flex-col gap-6'>
          <div>
              <img className='w-full h-96	' src={ImageAbout} alt="" />
          </div>
          <div className='p-3 '>
              <h1 className='text-3xl font-black ' >
              Don’t squeeze in a sedan when you could relax in a van.
              </h1>
          </div>
          <div className='p-3'>
              <p className='font-bold'>
              Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)<br/><br/>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
              </p>
          </div>
          <div className='p-10 bg-custom-apricot w-4/5	ms-3 mb-10 rounded-md	about-container-btn'>
              <div className='shape-container'>
              <h2 className='font-extrabold text-3xl '>
              Your destination is waiting. Your van is ready.
              </h2>
              <button className='mt-5 font-bold text-white bg-custom-ebony p-3 rounded-xl btn-about	'>
                Explore our vans
              </button>
              </div>
          </div>
       </div>
    </>

  )
}

export default About