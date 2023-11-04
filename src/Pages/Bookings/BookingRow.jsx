

const BookingRow = ({ books }) => {
    const { img, price, name, email, service, date ,_id} = books;
     const handlDelet=id=>{
        const pro=confirm('are your sheor')
        if(pro){
            fetch(`http://localhost:5002/bookings/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)})
        }
     }

     const handlupdate=id=>{

        fetch(`http://localhost:5002/bookings/${id}`,{
            method:"PATCH",
           headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status:"confirm"})
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)})
     }
    return (


        <tr>
            <th>
                <button onClick={()=>handlDelet(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={img} alt="" />
                        </div>

                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                <button onClick={ ()=>handlupdate(_id)} className="btn btn-ghost btn-xs">confirm</button>
            </th>
        </tr>

    );
};

export default BookingRow;