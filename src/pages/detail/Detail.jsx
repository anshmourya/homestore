import { AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../hooks/Data/DataHook";
import Nav from "../../components/nav/Nav";
import SliderStructure from "../../components/generalComponents/Slider/SliderStructure";
import SliderProduct from "../../components/ProductsCards/SliderProduct";
import Btns from "../../components/generalComponents/btns/Btns";
import Footer from "../../components/generalComponents/footer/Footer";

const Detail = ({ price }) => {
  const { id } = useParams();
  const { getSingleProduct } = useContext(DataContext);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleProduct(id);
      setSingleProduct(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {singleProduct && (
        <>
          <Nav />
          <div className="flex content">
            <SliderStructure
              data={singleProduct.images}
              element={SliderProduct}
              slidesPerView={1}
              autoplay={true}
            />
            <div>
              <PriceDetail
                price={singleProduct.price}
                title={singleProduct.title}
              />
              <SellerDetails />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Detail;

function PriceDetail({ price, title }) {
  return (
    <div className="h-auto p-3 mx-auto border rounded-lg">
      <div className="flex items-center justify-between my-3 ">
        <div>
          <span className="text-2xl font-semibold leading-10">
            ₹ {price * 10}
          </span>
          <p className="text-gray-400">{title}</p>
        </div>
        <div className="flex gap-2 text-lg">
          <AiOutlineHeart />
          <AiOutlineHeart />
        </div>
      </div>
      <p className="text-sm">
        Marine Hill, Port Blair, Andaman & Nicobar Islands
      </p>
    </div>
  );
}

function SellerDetails({}) {
  return (
    <div className="h-auto p-3 mx-auto my-4 border rounded-lg">
      <img
        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        alt=""
        className="inline mr-6 rounded-full w-14"
      />
      <span className="text-lg font-bold">Vinu</span>
      <Btns
        title={"Contact seller"}
        btnStyle={"block m-auto border w-full text-lg my-4 h-10 rounded-lg"}
      />
    </div>
  );
}
