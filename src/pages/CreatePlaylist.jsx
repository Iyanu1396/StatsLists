import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserID,
  addTracksToPlaylists,
  fetchTopTracksUris,
  createPlayList,
} from "../helpers";
import { setIsloading } from "../features/userData/userDataSlice";
import Button from "../components/Button";
import Nav from "../components/Nav";
import BackToMenu from "../components/BackToMenu";

const storedToken = window.localStorage.getItem("token");
function CreatePlaylist() {
  const { token } = useSelector((state) => state.authentication);

  const { isLoading } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  useEffect(
    function () {
      async function handlePlaylist() {
        dispatch(setIsloading(true));
        // Get userID
        const userID = await fetchUserID(token, storedToken);

        // Get top tracks uris
        const uris = await fetchTopTracksUris(token, storedToken);

        // Create the playlist
        const createdPlaylist = await createPlayList(
          userID,
          token,
          storedToken,
        );

        // Add tracks to playlist
        const addedTracks = await addTracksToPlaylists(
          createdPlaylist.id,
          token,
          storedToken,
          uris,
        );

        console.log(addedTracks);

        dispatch(setIsloading(false));
      }
      // handlePlaylist();
    },
    [dispatch, token],
  );

  return (
    <div className="min-h-screen bg-stone-200  font-mont">
      <Nav />
      <div className="px-4 pt-10  text-center tracking-wide text-green-950">
        <div className="space-y-5">
          <h1 className="font-bold text-xl">Create Your Perfect Playlist</h1>
          <p className="text-green-900">
            Welcome to Spot Lists! Let&apos;s craft a playlist that fits your
            unique taste.
          </p>
       
          <h2 className="font-bold text-lg">How It Works:</h2>
          
          <p className="text-green-900">
           <span className="font-bold">Personalized Selection</span> : We analyze your most-listened-to tracks on
            Spotify.
          </p>
          <p className="text-green-900">
           <span className="font-bold">Customized Selection</span> :
           feature coming soon!!!!
          </p>
          <p className="text-green-900">
            Hit &quot;Create Playlist&quot; and let Spot Lists do the rest. Your
            perfect soundtrack is just a click away!
          </p>
        </div>
      </div>

      <div className="py-10 text-center">
        <Button isLoading={isLoading}>
          {isLoading ? "Creating Playlist" : "Create Playlist"}
        </Button>
      </div>
      <BackToMenu />
    </div>
  );
}

export default CreatePlaylist;
