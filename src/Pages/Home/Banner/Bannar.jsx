import img1 from '../../../../public/assets/images/banner/1.jpg'
import img2 from '../../../../public/assets/images/banner/2.jpg'
import img3 from '../../../../public/assets/images/banner/3.jpg'
import img4 from '../../../../public/assets/images/banner/4.jpg'
// import img5 from '../../../../public/assets/images/banner/5.jpg'
// import img6 from '../../../../public/assets/images/banner/6.jpg'

const Bannar = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full" />
        <div className="absolute flex items-center rounded-xl  w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
            <div className='text-white space-y-6 w-1/2 pl-16  '>
            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=''>
            <button className="btn btn-error mr-4">Discover More</button>
            <button className="btn btn-outline btn-error">Latest Projects</button>
            </div>
            </div>
           
           
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 gap-4 bottom-0 ">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
            <div className='text-white space-y-6 w-1/2 pl-16  '>
            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=''>
            <button className="btn btn-error mr-4">Discover More</button>
            <button className="btn btn-outline btn-error">Latest Projects</button>
            </div>
            </div>
           
           
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 gap-4 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />

          <div className="absolute flex items-center rounded-xl  w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
            <div className='text-white space-y-6 w-1/2 pl-16  '>
            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=''>
            <button className="btn btn-error mr-4">Discover More</button>
            <button className="btn btn-outline btn-error">Latest Projects</button>
            </div>
            </div>
           
           
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 gap-4 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex items-center rounded-xl w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
            <div className='text-white space-y-6 w-1/2 pl-16  '>
            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=''>
            <button className="btn btn-error mr-4">Discover More</button>
            <button className="btn btn-outline btn-error">Latest Projects</button>
            </div>
            </div>
           
           
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 gap-4 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Bannar;