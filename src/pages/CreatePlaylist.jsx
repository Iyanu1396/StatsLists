import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopArtistsId } from "../helpers";
import { setTrackUris } from "../features/userData/userDataSlice";

function CreatePlaylist() {
  const { token } = useSelector((state) => state.authentication);
  const storedToken = window.localStorage.getItem("token");
  const { isLoading } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function createPlaylist() {
        const artistsId = await fetchTopArtistsId(token, storedToken);
        

        for (const artistId of artistsId) {
          
          const topTracksRes = await fetch(
            `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
            {
              params: { market: "US" },
              headers: {
                Authorization: `Bearer ${token || storedToken}`,
                "Content-Type": "application/json",
              },
            },
          );

          const topTracks = await topTracksRes.json()
          dispatch(setTrackUris(topTracks))
          
         
        }
      }
      createPlaylist();
      
      
    },
    [dispatch, storedToken, token],
  );

  return <div>CreatePlaylist</div>;
}

export default CreatePlaylist;
