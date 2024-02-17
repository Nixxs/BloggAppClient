import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Blog from "./pages/Blog";
import Theme from "./pages/Theme"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/blog", element: <Blog /> },
      { path: "/theme", element: <Theme /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
