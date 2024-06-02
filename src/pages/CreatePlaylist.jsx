import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserID,
  addTracksToPlaylists,
  fetchTopTracksUris,
  createPlayList,
} from "../helpers";
import {
  resetPlayList,
  setIsCreated,
  setIsloading,
  setPlaylist,
} from "../features/userData/userDataSlice";
import Button from "../components/Button";
import Nav from "../components/Nav";
import BackToMenu from "../components/BackToMenu";
const storedToken = window.localStorage.getItem("token");
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function CreatePlaylist() {
  const { token } = useSelector((state) => state.authentication);

  const { isLoading, playlist } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  const { width, height } = useWindowSize();

  useEffect(() => {
    document.title = "Spot Lists | Create Playlist";
  }, []);

  async function handleCreatePlaylist() {
    dispatch(setIsloading(true));
    // Get userID
    const userID = await fetchUserID(token, storedToken);

    // Get top tracks uris
    const uris = await fetchTopTracksUris(token, storedToken);

    // Create the playlist
    const createdPlaylist = await createPlayList(userID, token, storedToken);
   

    dispatch(
      setPlaylist({
        id: createdPlaylist.id,
        uri: createdPlaylist.uri,
        name: createdPlaylist.name,
      }),
    );

    // Add tracks to playlist
    await addTracksToPlaylists(createdPlaylist.id, token, storedToken, uris);

    dispatch(setIsloading(false));
    dispatch(setIsCreated(true));
  }

  function handleResetPlayList() {
    dispatch(resetPlayList());
  }

  return (
    <div className="min-h-screen bg-stone-200 py-4  font-mont ">
      <Nav />
      {!playlist.isCreated ? (
        <>
          <div className="px-4 pt-10  text-center tracking-wide text-green-950">
            <div className="space-y-5">
              <h1 className="text-xl font-bold">
                Create Your Perfect Playlist
              </h1>
              <p className="text-green-900">
                Welcome to Spot Lists! Let&apos;s craft a playlist that fits
                your unique taste.
              </p>

              <h2 className="text-lg font-bold">How It Works:</h2>

              <p className="text-green-900">
                <span className="font-bold">Personalized Selection</span> : We
                analyze your most-listened-to tracks on Spotify.
              </p>
              <p className="text-green-900">
                <span className="font-bold">Customized Selection</span> :
                feature coming soon!!!!
              </p>
              <p className="text-green-900">
                Hit &quot;Create Playlist&quot; and let Spot Lists do the rest.
                Your perfect soundtrack is just a click away!
              </p>
            </div>
          </div>

          <div className="py-10 text-center">
            <Button
              handleCreatePlaylist={handleCreatePlaylist}
              isLoading={isLoading}
            >
              {isLoading ? "Creating Playlist" : "Create Playlist"}
            </Button>
          </div>
        </>
      ) : (
        <div className="px-4 pt-10  text-center tracking-wide text-green-950">
          <Confetti width={width} height={"1000px"} />
          <div className="space-y-3">
            <h1 className="animate__infinite animate__animated animate__tada  text-xl font-bold sm:text-2xl">
              Your Playlist is Ready!
            </h1>
            <p className="text-lg text-green-900">
              Congratulations! Your personalized playlist has been successfully
              created.
            </p>
            <p className="text-green-900">
              <span className="font-bold">Playlist Name</span>: {playlist.name}
            </p>
            <p className="text-green-900">
              <span className="font-bold">Playlist ID</span>: {playlist.id}
            </p>
          </div>

          <div className="flex justify-center py-10">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
              width="100%"
              height="500"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className=" pb-7 text-center">
            <a href={playlist.uri}>
              <Button>Listen Now</Button>
            </a>
          </div>
        </div>
      )}
      <BackToMenu handleResetPlayList={handleResetPlayList} />
    </div>
  );
}

export default CreatePlaylist;
