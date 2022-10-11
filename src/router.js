import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Layouts/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
