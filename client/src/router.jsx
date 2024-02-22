import { createBrowserRouter, redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Paint from "./pages/Home/Paint";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <MainPage />,
    // loader: () => {
    //   if (localStorage.access_token) {
    //     return redirect("/login");
    //   }

    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <Paint />,
      },
    ],
  },
]);
export default router;
