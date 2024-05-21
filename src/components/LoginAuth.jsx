
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
        className="text-x transform-all animate__animated animate__bounceInLeft font-mont rounded-full border bg-green-500 px-5 py-5 font-bold text-green-950 duration-300 hover:px-7"
        onClick={() => dispatch(login())}
      >
        Login To Your Spotify Account
      </button>
    </div>
  );
}

export default LoginAuth;
