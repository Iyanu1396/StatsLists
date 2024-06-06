import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Nav from "../components/Nav";

import BackToMenu from "../components/BackToMenu";
import { setIsloading, setTopAlbums } from "../features/userData/userDataSlice";
import { useEffect } from "react";
import TopAlbumsItems from "../components/TopAlbumsItems";

function TopTracks() {
  const { token } = useSelector((state) => state.authentication);
  const storedToken = window.localStorage.getItem("token");
  const { isLoading } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Stats Lists | Top Albums';
  }, []);

  useEffect(
    function () {
      async function fetchTopAlbums() {
        dispatch(setIsloading(true));

        try {
          const res = await fetch(
            "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token || storedToken}` },
            },
          );

          if (!res.ok) {
            throw new Error("Failed to fetch top albums");
          }

          const data = await res.json();

          // returns data of most streamed tracks
          let albumData = data.items;

          // extract data of the albums of each tracks
          albumData = albumData.map((album) => album?.album);

          const removeDuplicates = [];
          const seenIds = new Set();


          //Removes duplicate albums
          for (let duplicate of albumData) {
            if (!seenIds.has(duplicate.id)) {
              seenIds.add(duplicate.id);
              removeDuplicates.push(duplicate);
            }
          }

          dispatch(setIsloading(false));
          dispatch(setTopAlbums(removeDuplicates));
        } catch (err) {
          console.log(err);
        }
      }
      fetchTopAlbums();
    },

    [dispatch, storedToken, token],
  );

  if (isLoading) return <Loader />;
  return (
    <div className="min-h-screen pb-4 bg-stone-200">
      <Nav />
      <h2 className="py-7 text-center font-bebas text-5xl font-medium tracking-wide">
        Top Albums
      </h2>
      {isLoading ? <Loader /> : <TopAlbumsItems />}
      <BackToMenu />
    </div>
  );
}

export default TopTracks;
