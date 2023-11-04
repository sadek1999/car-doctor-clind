
import { Link } from "react-router-dom";
import logo from "../../../public/assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/Authprobider";

const Navbar = () => {
    const {logout,user}=useContext(AuthContext)

    const handllogout=()=>{
        logout()
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })

    }

    const links=<>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>about</Link></li>
    <li><Link to={'/login'}>Login</Link></li>
    {
        user?.email?<li> <Link to={`/bookings/${user.email}`}>Bookigns</Link> </li>:<li></li>
    }
    
    </>
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                   <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<button onClick={handllogout} className="btn" > log out</button>:<button className="btn" > Login</button>
                    }
             
                </div>
            </div>
        </nav>
    );
};

export default Navbar;