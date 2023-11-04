import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/Authprobider";



const Chaekout = () => {
    const Service = useLoaderData()
    const {user}=useContext(AuthContext)
    const{title,_id,price,img}=Service;

    const handlbooking=e=>{
        
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const date=form.date.value;
        const price=form.price.value;
  
        const order={
            name,email,date,price,
            serviceId:_id,
            service:title,
            img
        }
        console.log(order)
        fetch(`http://localhost:5002/bookings`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div>
            <div className="p-4 bg-slate-200 space-y-2">
                <h1 className="text-center text-3xl ">{title}</h1>
                <form className="w-2/3 mx-auto space-y-2" onSubmit={handlbooking} action="">
                    <div className="flex flex-col md:flex-row space-x-4">
                        <input type="text" className="w-1/2 p-2" name="name" placeholder="name" id="" />
                        <input type="text" className="w-1/2 p-2" name="email" defaultValue={user?.email} id="" />
                    </div>
                    <div className="flex flex-col md:flex-row space-x-4">
                        <input type="date" className="w-1/2 p-2" name="date"  id="" />
                        <input type="text" className="w-1/2 p-2" defaultValue={'$'+price} name="price"  id="" />
                    </div>
                    <div className="  space-y-4">
                        <input type="text" className="w-full p-2" id="" />
                        <input type="submit" className="btn btn-primary w-full" value="Confarm" />


                    </div>
                </form>
            </div>


        </div>
    );
};

export default Chaekout;