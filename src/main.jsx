
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NewOrder from "./pages/NewOrder.jsx";
import AllOrders from "./pages/AllOrders.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import EditOrder from "./pages/EditOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "new-order",
        element: <NewOrder />,
      },
      {
  path: "all-orders",
  element: <AllOrders />,
},
{
  path:"orders/:orderID",
  element:<OrderDetails/>,
},
{
  path:"orders/:orderID/edit",
  element:<EditOrder/>
}
    ],
  },
]);

createRoot(document.getElementById("root")).render(

 <OrderProvider>
  <RouterProvider router={router} />
</OrderProvider>
);
