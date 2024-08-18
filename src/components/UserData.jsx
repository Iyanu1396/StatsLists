import { useSelector } from "react-redux";
import Button from "./Button";
import { Link } from "react-router-dom";
import LogOutAuth from "./LogOutAuth";

function UserData() {
  const { userData } = useSelector((state) => state.authentication);





  return (
    <div className="flex flex-col items-center justify-center py-10 font-mont text-green-950">
      {userData ? (
        <>
          <img
            className=" h-[200px]  w-[200px] rounded-full"
            src={userData.userAvatar}
            alt=""
          />
          <div className="space-y-2 py-10 text-center">
            <p className="font-bold">
              <i className="fa-solid fa-user pr-1"></i> {userData.userName}
            </p>
            <p className="font-bold">
              <i className="fa-solid fa-envelope pr-1"></i>
              {userData.userEmail}
            </p>
            <p className="font-bold">
              <i className="fa-solid fa-hashtag pr-1"></i>
              {userData.userID}
            </p>
            <LogOutAuth/>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/top-artists">
              <Button>Discover your top streamed artists</Button>
            </Link>
            <Link to="/top-tracks">
              {" "}
              <Button>Discover your top streamed tracks</Button>
            </Link>
            <Link to="/top-albums">
              <Button>Discover your most streamed albums</Button>
            </Link>
            <Link to="/create-playlist">
              <Button>
                Create a personalized playlists featuring your most-played
                tracks on Spotify
              </Button>
            </Link>
          </div>
          
        
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserData;
