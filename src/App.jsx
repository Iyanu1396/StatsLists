import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoggedInPage from "./pages/LoggedInPage";
import "animate.css";
import TopArtists from "./pages/TopArtists";

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
    {
      path: "/top-artists",
      element: <TopArtists />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
