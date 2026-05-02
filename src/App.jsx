import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./components/cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import MyOrders from "./pages/MyOrders";
import AdminLayout from "./components/admin/AdminLayout";
import AdminHome from "./pages/AdminHome";
import UserManagement from "./components/admin/UserManagement";
import ProductManagement from "./components/admin/ProductManagement";
import EditProduct from "./components/admin/EditProduct";
import OrderManagement from "./components/admin/OrderManagement";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<Collection />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="order/:id" element={<OrderDetails />} />
          <Route path="my-orders" element={<MyOrders />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
          <Route path="orders" element={<OrderManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
