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
    path: "/crypto-list/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crypto-list/assets",
    element: <Assets />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crypto-list/organization",
    element: <Organization />,
    errorElement: <ErrorPage />,
  },
]);
