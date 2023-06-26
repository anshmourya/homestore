import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Request from "./pages/request/Request";
import Seller from "./pages/seller/Seller";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/request" element={<Request />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
