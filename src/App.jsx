import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoggedInPage from "./pages/LoggedInPage";
import "animate.css";
import TopArtists from "./pages/TopArtists";
import TopTracks from "./pages/TopTracks";
import TopAlbums from "./pages/TopAlbums";
import CreatePlaylist from "./pages/CreatePlaylist";

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
    },
    {
      path: "/top-albums",
      element: <TopAlbums />,
    },
    {
      path: "/create-playlists",
      element: <CreatePlaylist />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
