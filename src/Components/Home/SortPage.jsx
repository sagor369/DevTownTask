import React, { useState } from "react";

const SortPage = ({
  products,
  filterData,
  setProducts,
  pageHandle,
  priceData
}) => {
  const [sort, setSort] = useState(false);

  //   filter input code

  const filterInput = (e) => {
    // e.preventDefault()
    // const data = e.value
    const data = e.target.value;
    console.log(data);
    if (data) {
      filterData(data);
    }
  };
  const priceHandle = (e) => {
    e.preventDefault()
    const data = e.target.price.value;
    console.log(data);
    if (data) {
      priceData(data);
    }
  };

  //   sort by price
  const sortData = () => {
    setSort(!sort);
    if (sort) {
      const data = products.sort((a, b) => a.price - b.price);
      setProducts(data);
      pageHandle(0);
    } else {
      const data = products.sort((a, b) => b.price - a.price);
      setProducts(data);
      pageHandle(0);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className=" text-neutral-950 md:flex gap-4">
          <form onChange={filterInput}>
            <select name="category" id="" className="rounded-xl btn">
              <option value="">Select category</option>
              <option value="tee">Tee</option>
              <option value="shoes">Shoes</option>
              <option value="cap">Cap</option>
              <option value="pants">pant</option>
              <option value="boot">Boot</option>
            </select>
          </form>
          <form onSubmit={priceHandle} className="form-control">
            <div className="input-group">
              <input
              name="price"
                type="number"
                placeholder="Price"
                className="px-4"
              />
              <input type="submit" className="btn btn-square"
                value="GO"
              />
            </div>
          </form>
        </div>
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
