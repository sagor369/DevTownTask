import { useEffect, useState } from "react";
import AllProducts from "./AllProducts";

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data.data))
  },[])
  return (
    <div className="my-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {
        products.map(product => 
        <AllProducts
        key={product._id}
        product = {product}
        ></AllProducts>)
      }
      
    </div>
  );
};

export default Home;
