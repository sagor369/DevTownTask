import { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import SortPage from "./SortPage";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  
  // pagination function
  const perPage = 9;
  const totalPage = Math.ceil(products?.length / perPage);
  const pageNumber = [...Array(totalPage)?.keys()];

  // pagination and page data control
  const pageHandle = (page) => {
    setCurrentPage(page);
    const backData = page * perPage;
    const currentData = products.slice(backData, perPage + backData);
    setCurrentPageData(currentData);
  };


  // filter category data code 
  const filterData = (category) =>{
    fetch(`https://dev-town-server-sagor369.vercel.app/product/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const fastData = data.data?.slice(0, perPage);
        setCurrentPageData(fastData);
        setProducts(data.data);
      });
  } 


  // filter price data code 
  const priceData = (price) =>{
    console.log(price)
    fetch(`https://dev-town-server-sagor369.vercel.app/productPrice/${price}`)
      .then((res) => res.json())
      .then((data) => {
        if(data?.data){
          console.log(data)
          const fastData = data?.data?.slice(0, perPage);
          setCurrentPageData(fastData);
          setProducts(data?.data)
        }
      })
  } 
    
  

  useEffect(() => {
    fetch("https://dev-town-server-sagor369.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const fastData = data.data?.slice(0, perPage);
        setCurrentPageData(fastData);
        setProducts(data.data);
      });
  }, []); 
console.log(products)
  return (
    <div>
      <div className="mt-10 bg-primary text-white p-4 mb-4 rounded-md">
        <SortPage 
        products= {products}
        setProducts={setProducts}
        pageHandle={pageHandle}
        
        filterData = {filterData}
        priceData={priceData}
        ></SortPage>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {currentPageData.map((product) => (
          <AllProducts key={product._id} product={product}></AllProducts>
        ))}
      </div>
      <div className="mt-10 text-center bg-primary text-white ">
        {totalPage > 0 && products?.length > 5 && (
          <div className="">
            <div className="join-item bg-primary text-white">
              {pageNumber.map((page) => (
                <button
                  className={
                    currentPage === page
                      ? "border-white border text-black rounded-full p-2"
                      : "rounded-full p-2 bg-blue-400 ml-2"
                  }
                  key={page}
                  onClick={() => pageHandle(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            {currentPage <= 0 ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  pageHandle(currentPage - 1);
                }}
                className="join-item btn mr-2"
              >
                &#10094; prev
              </button>
            )}
            {currentPage === pageNumber.length - 1 ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  pageHandle(currentPage + 1);
                }}
                className="join-item btn"
              >
                next &#10095;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
