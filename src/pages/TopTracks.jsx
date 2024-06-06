import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Nav from "../components/Nav";

import BackToMenu from "../components/BackToMenu";
import { setIsloading, setTopTracks } from "../features/userData/userDataSlice";
import { useEffect } from "react";
import TopTracksItems from "../components/TopTracksItems";

function TopTracks() {
  const { token } = useSelector((state) => state.authentication);
  const storedToken = window.localStorage.getItem("token");
  const { isLoading } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Stats Lists | Top Tracks';
  }, []);

  useEffect(
    function () {
      async function fetchTopTracks() {
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
            throw new Error("Failed to fetch top tracks");
          }

          const data = await res.json();
     

          dispatch(setIsloading(false));
          dispatch(setTopTracks(data.items));
        } catch (err) {
          console.log(err);
        }
      }
      fetchTopTracks();
    },

    [dispatch, storedToken, token],
  );

  if (isLoading) return <Loader />;
  return (
    <div className="min-h-screen bg-stone-200 py-3">
      <Nav />
      <h2 className="py-7 text-center font-bebas text-5xl font-medium tracking-wide">
        Top Tracks
      </h2>
      {isLoading ? <Loader /> : <TopTracksItems />}

      <BackToMenu />
    </div>
  );
}

export default TopTracks;
