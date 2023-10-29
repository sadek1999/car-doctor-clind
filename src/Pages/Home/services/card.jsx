

const Card = ({ data }) => {
    const {img,title,price}=data;
    // console.log(data)

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure> */}
             <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price :<span className="text-red-400">{price}</span>TK</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;