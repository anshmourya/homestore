import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductsCard = ({ title, price, rating, img, id }) => {
  return (
    <>
      <div className="max-w-[296px] max-h-[400px] p-3 product-card border border-transparent transition-all cursor-pointer my-3 ">
        <span className="float-right mx-3 px-1 my-2  font-semibold bg-red-500 text-sm text-gray-50  ">
          {price > 1000 ? "For Sale" : "For Rent"}
        </span>
        <img
          src={img}
          className="w-[254px] h-[160px] object-center m-auto rounded-md"
        />
        <span className="block my-2 text-lg font-semibold">{title}</span>
        <span className="block mb-5 text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur
        </span>
        <div className="flex items-center justify-between text-sm font-semibold text-gray-600">
          <span className="flex items-center w-10 text-center text-white bg-green-400 justify-evenly">
            <AiFillStar />
            {rating.toFixed(1)}
          </span>
          <span>&#8377; {price * 10}</span>
        </div>
        <Link to={`/detail/${id}`}>
          <button className="text-red-400 font-bold border-t w-[100%] my-6 p-2 cart transition-all">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductsCard;
