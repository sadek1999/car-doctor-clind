import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";



const Services = () => {

    const [servic,setservic]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5002/service`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setservic(data)
        })
    },[])
    return (
        <div>
            <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold text-orange-400">services</h1>
            <h1 className="text-4xl font-bold ">Our Services Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <p>{servic.length}</p>
           
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    servic.map(data=><Card key={data._id} data={data}></Card>)
                }
            </div>
            
            
            
        </div>
    );
};

export default Services;