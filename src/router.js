import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Layouts/home";
import Main from "./components/Layouts/main";
import NotFound from "./components/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
