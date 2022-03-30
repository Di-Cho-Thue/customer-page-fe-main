import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./containers";
import Product from "./containers/Product/product";
import Details from "./containers/Product/[id]";
import ProductType from "./containers/ProductType/[id]";
import Card from "./containers/Card";
import RatingPage from "./containers/customer-rating";
import ComplainPage from "./containers/customer-complain";
import Order from "./containers/Order";
import CheckoutPage from "./containers/Checkout";
import SigninPage from "./containers/Signin";
import SignupPage from "./containers/Signup";
import UserPage from "./containers/User/User";
import ShipperInfoPage from "./containers/ShipperInfo";

function App() {
  return (
    <Router>

      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sanpham/:thongtin/:page/:limit" element={<Product />} />
          <Route path="/sanpham/:id" element={<Details />} />
          <Route path="/loaisanpham/:id/:page/:limit" element={<ProductType />} />
          <Route path="/giohang" element={<Card />} />
          <Route path="/khachhangdanhgia/:donhang/:gianhang" element={<RatingPage />} />
          <Route path="/donhang/:tinhtrang" element={<Order />} />
          <Route path="/thanhtoan/:magianhang" element={<CheckoutPage />} />
          <Route path="/khieunai" element={<ComplainPage />} />
          <Route path="/khachhang/:makhachhang" element={<UserPage />} />
          <Route path="/nguoigiaohang" element={<ShipperInfoPage />} />
          <Route path="/dangnhap" element={<SigninPage />} />
          <Route path="/dangky" element={<SignupPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
