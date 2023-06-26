import { useState, useEffect } from "react";
import Footer from "../../components/generalComponents/footer/Footer";
import Nav from "../../components/nav/Nav";
import RequestCard from "../../components/ProductsCards/RequestCard";

const Seller = () => {
  const [sell, setSell] = useState({});
  const [listedProduct, setListedProduct] = useState(
    JSON.parse(localStorage.getItem("listedProduct")) || []
  );
  // Array of input details
  const inputDetails = [
    {
      id: "product_name",
      label: "PRODUCT NAME",
      placeholder: "PRODUCT NAME",
      type: "text",
      name: "title",
    },
    {
      id: "product_desc",
      label: "PRODUCT DESCRIPTION",
      placeholder: "PRODUCT DESCRIPTION",
      type: "text",
      name: "desc",
    },
    {
      id: "product_price",
      label: "YOUR BUDGET",
      placeholder: "BUDGET IN INR",
      type: "number",
      name: "price",
    },
    {
      id: "product_img",
      label: "PRODUCT IMAGE IF HAVE ANY",
      placeholder: "PRODUCT IMAGE",
      type: "file",
      name: "img",
    },
    // Add more input details as needed
  ];
  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setSell((prev) => ({
          ...prev,
          [e.target.name]: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setSell((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = () => {
    setListedProduct((prev) => [...prev, sell]);
    setSell({}); // Clear the form fields after submission
  };

  useEffect(() => {
    localStorage.setItem("listedProduct", JSON.stringify(listedProduct));
  }, [listedProduct]);
  return (
    <>
      <Nav />
      <form className="px-8 pt-6 pb-8 m-5 bg-white rounded shadow-md">
        <fieldset>
          <legend className="mb-4 text-lg font-bold ">REQUEST PRODUCT</legend>
          {/* Iterate over input details array */}
          {inputDetails.map((input) => (
            <div className="mb-4" key={input.id}>
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor={input.id}
              >
                {input.label}
              </label>
              {input.type === "file" ? (
                <input
                  id={input.id}
                  name={input.name}
                  className="w-full leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  required
                  type={input.type}
                  accept="image/*"
                  onChange={handleChange}
                />
              ) : (
                <input
                  id={input.id}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  required
                  type={input.type}
                  value={sell[input.name] || ""}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}

          {/* Add other form fields or components as needed */}

          <div className="mb-4">
            <button
              id="singlebutton"
              name="singlebutton"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
      <div className="container content">
        {listedProduct.length > 0 &&
          listedProduct.map((item) => (
            <RequestCard
              key={item.id}
              title={item.title}
              image={item.img}
              desc={item.desc}
              price={item.price}
            />
          ))}
      </div>
    </>
  );
};

export default Seller;
