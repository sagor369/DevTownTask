import { FaRegBookmark } from "react-icons/fa";


const AllProducts = ({product}) => {
    console.log(product)
    const {img, name, price,ratings,description, stock, _id} = product
    return (
        <div className="card w-96 bg-primary bg-opacity-25 shadow-xl">
        <figure>
          <img className="h-60 w-full"
            src={img}
            alt={`${name} image`}
          />
        </figure>
        <div className="flex flex-col px-4 justify-between py-4 h-[320px]">
          <div >
          <h2 className="card-title ">
            {name}
          </h2>
          <p className="py-2 ">{description}</p>
          <p className="font-bold">Rating: {ratings}</p>
          <p className="font-bold">Price: {price}Tk</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost"><FaRegBookmark className="w-6 h-6"/></button>
            <button className="btn btn-primary ">Buy</button>
          </div>
        </div>
      </div>
    );
};

export default AllProducts;