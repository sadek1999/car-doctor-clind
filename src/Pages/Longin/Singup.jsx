import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/Authprobider";


const Singup = () => {

    const {singin}=useContext(AuthContext)

    const handlsingup=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
        singin(email,password)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    const google=e=>{
        e.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:w-1/2">
                   <img src='https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1698765111~exp=1698765711~hmac=ec2a65f690ade588966e9469140311678d72ce91cca4eb54c880b1957aff7ddf' alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm lg:w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Sing up</h1>
                    <form className="card-body" onSubmit={handlsingup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-4">
                           
                            <input type="submit" className="btn btn-primary" value="sing up" />
                          <button onClick={google}   className="btn btn-primary "> Google </button>
                        </div>
                    </form>
                     <h1 className="text-center my-4">are you new? <Link to={'/singup'} className="text-blue-500 text-xl">sing up</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Singup;