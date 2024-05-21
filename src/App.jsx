import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoggedInPage from "./pages/LoggedInPage";
import "animate.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/app",
      element: <LoggedInPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
