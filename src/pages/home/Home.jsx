import { useContext, useEffect, useState, useCallback } from "react";
import ProductsCard from "../../components/ProductsCards/ProductsCard";
import Nav from "../../components/nav/Nav";
import { DataContext } from "../../hooks/Data/DataHook";

const Home = () => {
  const [search, setSearch] = useState("");
  const { getAllData, product } = useContext(DataContext);

  useEffect(() => {
    if (product.length === 0) getAllData();
  }, []);

  const renderProducts = useCallback(() => {
    return product
      .filter((item) =>
        search === ""
          ? item
          : item.title.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => (
        <ProductsCard
          key={item.id}
          title={item.title}
          price={item.price}
          img={item.thumbnail}
          rating={item.rating}
          id={item.id}
        />
      ));
  }, [product, search]);

  return (
    <>
      <Nav search={setSearch} />

      <div className="container content">
        <div className="grid grid-cols-3">{renderProducts()}</div>
      </div>
    </>
  );
};

export default Home;
