import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticateUser,
  setToken,
  setIsloading,
} from "../features/authentication/authenticationSlice";
import Loading from "../components/Loader";
import UserData from "../components/UserData";

function LoggedInPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      dispatch(setToken(token));
    } else {
      const storedToken = window.localStorage.getItem("token");
      if (storedToken) {
        dispatch(setToken(storedToken));
      }
    }
  }, [dispatch]);

  const { token, isLoading } = useSelector((state) => state.authentication);

  useEffect(
    function () {
      if (!token) return;

      async function fetchUserData() {
        dispatch(setIsloading(true));

        try {
          const res = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!res.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await res.json();
          const userName = data.display_name;
          const userEmail = data.email;
          const userID = data.id;
          const userAvatar = data.images[1].url;

          dispatch(setIsloading(false));
          dispatch(authenticateUser(userName, userEmail, userID, userAvatar));
        } catch (err) {
          console.log(err);
        }
      }
      fetchUserData();
    },

    [dispatch, token],
  );

  return (
    <div className="min-h-screen bg-stone-200 ">
      <nav className="flex- flex cursor-pointer items-center justify-center gap-3 border-b-2 border-green-500 py-6 font-bebas text-4xl text-green-950 sm:text-5xl">
        <h1>Spot Lists</h1>
        <i className="fa-brands fa-spotify text-green-500 "></i>
      </nav>
      {isLoading ? <Loading /> : <UserData />}
    </div>
  );
}

export default LoggedInPage;


