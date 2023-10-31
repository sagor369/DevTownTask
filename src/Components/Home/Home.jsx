import { FaRegBookmark } from "react-icons/fa";

const Home = () => {
  return (
    <div className="my-32">
      <div className="card w-96 bg-primary bg-opacity-25 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost"><FaRegBookmark className="w-6 h-6"/></button>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
