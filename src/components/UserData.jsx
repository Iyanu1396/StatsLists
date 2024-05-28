import { useSelector } from "react-redux";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

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
          <div className="py-10 text-center space-y-2">
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
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
          <Link to="/top-artists">
            <Button>
              Discover your top streamed artists
            </Button></Link>
           <Link to="/top-tracks"> <Button>
              Discover your top streamed tracks
            </Button></Link>
            <Button>Discover your most streamed albums</Button>
            <Button>
              Create a playlist featuring tracks from your most streamed artists
            </Button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserData;
