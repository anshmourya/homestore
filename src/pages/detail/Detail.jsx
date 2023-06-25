import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../hooks/Data/DataHook";
import Nav from "../../components/nav/Nav";

const Detail = () => {
  const { id } = useParams();
  const { getSingleProduct } = useContext(DataContext);
  const [singleProduct, SetSingleProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleProduct(id);
      SetSingleProduct(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Nav />
      {console.log(singleProduct)}
    </>
  );
};

export default Detail;
