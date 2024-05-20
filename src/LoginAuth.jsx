import { useEffect, useState } from "react";

const SpotifyAuth = () => {
  const CLIENT_ID = "036356fa84574cff91cb6272bb50ed3e";
  const REDIRECT_URI = "http://localhost:5173/callback";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const handleLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private user-read-email`;
  };

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  return (
    <div>
      <button
        className=" text-x transform-all rounded-full border bg-green-500 px-5 py-5 font-bold text-green-950 duration-300 hover:px-7 font-roboto  animate__animated animate__bounceInLeft"
        onClick={handleLogin}
      >
        Login To Your Spotify Account
      </button>
    </div>
  );
};

export default SpotifyAuth;
