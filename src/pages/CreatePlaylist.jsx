import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopArtistsId,
  getTopTracks,
  fetchUserID,
  addTracksToPlaylists,
} from "../helpers";
import {
  setPlayListID,
  setTrackUris,
} from "../features/userData/userDataSlice";
const storedToken = window.localStorage.getItem("token");
function CreatePlaylist() {
  const { token } = useSelector((state) => state.authentication);

  const { isLoading, playList } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  useEffect(
    function () {
      async function createPlaylist() {
        const userID = await fetchUserID(token, storedToken);

        // Get artists ID
        const artistsId = await fetchTopArtistsId(token, storedToken);

        let trackUris = [];
        for (const artistId of artistsId) {
          trackUris = await getTopTracks(artistId, token, storedToken);
        }

        dispatch(setTrackUris(uniqueUris));

        // Create playlist
        // const createdPlaylistRes = await fetch(
        //   `https://api.spotify.com/v1/users/${userID}/playlists`,
        //   {
        //     method: "POST",
        //     headers: {
        //       Authorization: `Bearer ${token || storedToken}`,
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       name: "My Most Streamed Artists Playlist",
        //       description: "A playlist of my most streamed artists",
        //       public: false,
        //     }),
        //   },
        // );

        // const createdPlaylistData = await createdPlaylistRes.json();
        // console.log(createdPlaylistData);
        // dispatch(setPlayListID(createdPlaylistData.id));

        // Add tracks to playlist
        // const addedTracks =  await addTracksToPlaylists(
        //     playList.ID,
        //     token,
        //     storedToken,
        //     playList.trackUris,
        //   );
      }
      createPlaylist();
    },
    [dispatch, token],
  );

  return <div>CreatePlaylist</div>;
}

export default CreatePlaylist;
