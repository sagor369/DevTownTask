import { FaRegBookmark } from "react-icons/fa";
import Swal from "sweetalert2";


const AllProducts = ({product}) => {
    const {img, name, price,ratings,description,_id} = product

    const buyHandle = () =>{
      Swal.fire({
        title: 'Do you want to buy product?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Product Buy Successfull', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }

    return (
        <div className="card  bg-primary bg-opacity-25 shadow-xl">
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
            <button onClick={buyHandle} className="btn btn-primary ">Buy</button>
          </div>
        </div>
      </div>
    );
};

export default AllProducts;