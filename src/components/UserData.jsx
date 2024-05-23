import { useSelector } from "react-redux";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function UserData() {
  const { userData } = useSelector((state) => state.authentication);
  const navigate = useNavigate();

   function handleClick(){
    navigate('/top-artists')
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 font-mont text-green-950">
      {userData ? (
        <>
          <img
            className=" h-[200px]  w-[200px] rounded-full"
            src={userData.userAvatar}
            alt=""
          />
          <div className="py-10 text-center">
            <p className="font-bold">
              <i className="fa-solid fa-user pr-1"></i> {userData.userName}
            </p>
            <p className="font-bold">
              <i className="fa-solid fa-envelope pr-1"></i>
              {userData.userEmail}
            </p>
            <p  className="font-bold">
              <i className="fa-solid fa-hashtag pr-1"></i>
              {userData.userID}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button handleClick={handleClick}>Discover your top streamed artists</Button>
            <Button>Explore your top streamed tracks</Button>
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
