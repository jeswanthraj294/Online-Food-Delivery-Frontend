import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; // Import the CSS file
import App from "./App";
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import About from './components/About';
import ErrorPage from "./components/ErrorPage";
import Cart from "./components/Cart";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter} />
  </React.StrictMode>
);