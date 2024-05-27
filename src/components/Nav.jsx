import { Link } from "react-router-dom";

function Nav() {
  return (
    <Link to="/">
      <nav className="flex- flex cursor-pointer items-center justify-center gap-3 border-b-2 border-green-500 py-6 font-bebas text-4xl text-green-950 sm:text-5xl">
        <h1>Spot Lists</h1>
        <i className="fa-brands fa-spotify text-green-500 "></i>
      </nav>
    </Link>
  );
}

export default Nav;
