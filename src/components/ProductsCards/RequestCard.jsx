const RequestCard = ({ image, title, price, desc }) => {
  return (
    <>
      <div className="relative flex items-center w-full gap-5 px-2 py-2 my-3 border rounded-lg cursor-pointer">
        <img
          src={image}
          alt={title}
          className="object-contain rounded-lg w-[150px] aspect-ratio: auto;"
        />
        <div>
          <span className="inline-block my-3 text-lg font-semibold capitalize">
            {title}
          </span>
          <p className="capitalize">{desc}</p>
        </div>
        <div className="absolute right-6 top-6">
          <span className="block my-1">&#8377; {price}</span>
          <button
            type="button"
            className="w-32 rounded-full bg-orange-400 py-1.5 font-medium text-white hover:shadow-md text-sm"
          >
            Mark As Sold
          </button>
        </div>
      </div>
    </>
  );
};

export default RequestCard;
