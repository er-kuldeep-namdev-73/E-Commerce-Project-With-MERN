import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./features/pages/Home";
import ProductList from "./features/product-list/ProductList";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import CartPage from "./features/pages/CartPage";
import CheckoutPages from "./features/pages/CheckoutPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPages></CheckoutPages>,
  },
]);


function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <ProductList/> */}
      {/* <Home/> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
