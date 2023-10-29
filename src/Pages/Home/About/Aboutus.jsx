
import parson from '../../../../public/assets/images/about_us/person.jpg';
import parts from '../../../../public/assets/images/about_us/parts.jpg';

const Aboutus = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={parson}className="w-2/3 h-96 rounded-lg shadow-2xl" />
                <img src={parts} className='absolute top-1/2 right-10 w-1/2 border-white border-4 rounded-sm' alt="" />
                </div>
                
                <div className='lg:w-1/2 space-y-4 '>
                    <h1 className='text-xl text-orange-500 font-semibold'>About us</h1>
                    <h1 className="text-5xl font-bold w-2/3">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;