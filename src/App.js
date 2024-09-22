import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  { 
    path: '/checkout',
    element: <Checkout></Checkout>,
  },
  { 
    path: '/product-detail',
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
