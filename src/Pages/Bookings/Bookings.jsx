import { useLoaderData } from "react-router-dom";
import BookingRow from "./BookingRow";


const Bookings = () => {

    const bookservices = useLoaderData()
    console.log(bookservices)
    return (
        <div>
            <h1> This is booking pages {bookservices.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                           
                            <th>Name</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th> Ohter</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                      {
                        bookservices.map(books=> <BookingRow key={books._id} books={books}></BookingRow>)
                      }
                       
                    </tbody>
                   
                   

                </table>
            </div>
        </div>
    );
};

export default Bookings;