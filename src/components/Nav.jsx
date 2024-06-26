import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function Nav() {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  return (
    <Link to={isLoggedIn ? `/menu` : `/`}>
      <nav className="top-0 sticky flex  cursor-pointer items-center justify-center bg-stone-200 gap-3 z-50 border-b-2 border-green-500 py-6 font-bebas text-4xl text-green-950 sm:text-5xl">
        <h1>Stats Lists</h1>
        <i className="fa-brands fa-spotify text-green-500 "></i>
      </nav>
    </Link>
  );
}

export default Nav;
