import { useEffect } from "react";
import {
  setIsloading,
  setTopArtists,
} from "../features/authentication/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import TopArtistsItems from "../components/TopArtistsItems";
import Loader from "../components/Loader";

function TopArtists() {
  const { token, isLoading, topArtists } = useSelector(
    (state) => state.authentication,
  );
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
              headers: { Authorization: `Bearer ${token}` },
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

    [dispatch, token],
  );

  if (isLoading ) return <Loader />;
  return (
    <div>
      <p>Top Artists</p>
      
    
    </div>
  );
}

export default TopArtists;
