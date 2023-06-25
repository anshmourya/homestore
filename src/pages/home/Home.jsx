import { useContext, useEffect } from "react";
import ProductsCard from "../../components/ProductsCards/ProductsCard";
import Nav from "../../components/nav/Nav";
import { DataContext } from "../../hooks/Data/DataHook";

const Home = () => {
  const { getAllData, product } = useContext(DataContext);
  useEffect(() => {
    if (!product) getAllData();
  }, []);
  return (
    <>
      <Nav />

      <div className="container content">
        <div className="grid grid-cols-3">
          {product.map((item) => {
            return (
              <ProductsCard
                key={item.id}
                title={item.title}
                price={item.price}
                img={item.thumbnail}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
