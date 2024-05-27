import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoggedInPage from "./pages/LoggedInPage";
import "animate.css";
import TopArtists from "./pages/TopArtists";
import TopTracks from "./pages/TopTracks";

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
    },
    {
      path: "/top-tracks",
      element: <TopTracks />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
