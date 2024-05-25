import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import TopArtistsItems from "../components/TopArtistsItems";
import Loader from "../components/Loader";
import {
  setIsloading,
  setTopArtists,
} from "../features/userData/userDataSlice";

function TopArtists() {
  const { token } = useSelector((state) => state.authentication);
  const storedToken = window.localStorage.getItem("token");
  const { isLoading } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchTopArtists() {
        dispatch(setIsloading(true));

        try {
          const res = await fetch(
            "https://api.spotify.com/v1/me/top/artists?time_range=long_term",
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token || storedToken}` },
            },
          );

          if (!res.ok) {
            throw new Error("Failed to fetch top artists");
          }

          const data = await res.json();

          dispatch(setIsloading(false));
          dispatch(setTopArtists(data.items));
        } catch (err) {
          console.log(err);
        }
      }
      fetchTopArtists();
    },

    [dispatch, storedToken, token],
  );

  if (isLoading) return <Loader />;
  return (
    <div className="min-h-screen bg-stone-200">
      <h2 className="py-7 tracking-wide text-center font-bebas text-5xl font-medium">
        Top Artists
      </h2>
      <TopArtistsItems />
    </div>
  );
}

export default TopArtists;
