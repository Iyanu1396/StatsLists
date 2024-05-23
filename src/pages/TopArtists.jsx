import { useEffect } from "react";
import {
  setIsloading,
  setTopArtists,
} from "../features/authentication/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";

function TopArtists() {
  const { token, isLoading } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!token) return
      async function fetchTopArtists() {
        dispatch(setIsloading(true));

        try {
          const res = await fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!res.ok) {
            throw new Error("Failed to fetch top artists");
          }

          const data = await res.json();
          console.log(data)

          dispatch(setIsloading(false));
          dispatch(setTopArtists(data));
        } catch (err) {
          console.log(err);
        }
      }
      fetchTopArtists();
    },

    [dispatch, token],
  );
  return <div>
    Top Artists
  </div>;
}

export default TopArtists;
