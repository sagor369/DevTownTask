import React, { useState } from "react";

const SortPage = ({ products, filterData, setProducts, pageHandle, currentPage }) => {
  const [sort, setSort] = useState(false);

//   filter input code 

    const filterInput =(e) =>{
        e.preventDefault()
        const data = e.target.filter.value
        if(data){
            filterData(data)
        }
       

    }


//   sort by price 
  const sortData = () => {
    setSort(!sort);
    if (sort) {
      const data = products.sort((a, b) => a.price - b.price);
      setProducts(data);
      pageHandle(currentPage);
    } else {
      const data = products.sort((a, b) => b.price - a.price);
      setProducts(data);
      pageHandle(currentPage);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <form onSubmit={filterInput}>
          <div className="join">
            <input
            name="filter"
              className="input input-bordered join-item text-neutral-950"
              placeholder="search"
            />
            <button type="submit" className="btn join-item rounded-r-full">Search</button>
          </div>
        </form>
        <div>
          <button onClick={sortData} className="btn ">
            Sort by
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortPage;
