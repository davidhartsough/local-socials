import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Search, { searchLoader } from "./Search";
import Social, { socialLoader } from "./Social";
import PageLoader from "./PageLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    loader: searchLoader,
    children: [
      {
        path: "e/:id",
        element: <Social />,
        loader: socialLoader,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<PageLoader />} />;
}
