import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import "./Index.css";
import Shop from "./ui/Shop";
import { shopLoader } from "./services/apiShop";
import ShoppingCart from "./ui/ShoppingCart";
import Error from "./ui/Error";
import LikedShop from "./ui/LikedShop";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader: shopLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <ShoppingCart />, errorElement: <Error /> },
      {
        path: "/liked",
        element: <LikedShop />,
        loader: shopLoader,
        errorElement: <Error />,
      },
      // bug добавить actions
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
