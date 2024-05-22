import LoginAuth from "../components/LoginAuth";

function HomePage() {
  return (
    <div className=" flex h-[100vh] flex-col items-center justify-center bg-stone-200 px-4">
      <h1 className="animate__animated animate__bounceInLeft pb-10 text-center font-bebas text-3xl font-medium tracking-wide text-green-950 sm:text-5xl">
        Welcome To Spot Lists
        <span>
          <i className="fa-brands fa-spotify text-green-500 pl-3"></i>
        </span>{" "}
      </h1>
      <p className=" animate__animated animate__bounceInLeft max-w-[700px] pb-7 text-center   text-green-950 font-mont font-medium">
        Discover a new way to enjoy your favorite music with Spot Lists. Our app
        creates personalized playlists featuring songs from your most
        listened-to artists on Spotify, ensuring you always have the perfect
        soundtrack for any moment.
      </p>
      <LoginAuth />
    </div>
  );
}

export default HomePage;
