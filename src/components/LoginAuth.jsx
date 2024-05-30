import { useDispatch } from "react-redux";
import {
  login,
  setToken,
} from "../features/authentication/authenticationSlice";

function LoginAuth() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="transform-all text-lg  animate__animated animate__bounceInLeft rounded-full  bg-green-500  px-5 py-5 font-mont font-bold text-green-950 duration-300 hover:px-7 md:text-xl"
        onClick={() => dispatch(login())}
      >
        Login To Your Spotify Account
      </button>
    </div>
  );
}

export default LoginAuth;
