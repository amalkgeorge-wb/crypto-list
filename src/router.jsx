import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Assets from "./routes/Assets";
import Organization from "./routes/Organization";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/crypto-list",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/assets",
    element: <Assets />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/organization",
    element: <Organization />,
    errorElement: <ErrorPage />,
  },
]);
