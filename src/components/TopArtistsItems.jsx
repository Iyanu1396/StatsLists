import { useSelector } from "react-redux";

function TopArtistsItems() {
  const { topArtists } = useSelector((state) => state.userData);

  return (
    <div className="grid grid-cols-1 gap-10 font-mont sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4   ">
      {topArtists?.map((artist) => (
        <div
          className="flex flex-col  items-center px-3 tracking-wide"
          key={artist?.name}
        >
          <img
            className="h-[100px] w-[100px] rounded-full"
            src={artist?.images[0].url}
            alt=""
          />
          <div className=" mt-2 text-center">
            <p className="mb-2 font-bold">
              {artist?.name}{" "}
              <a href="">
                <i className="fa-brands fa-spotify pl-1 text-green-500"></i>
              </a>
            </p>
            <p className="max-w-[300px]  font-medium">
              {artist?.genres.join(" , ")}
            </p>
          </div>
        </div>
      ))}

      <p></p>
    </div>
  );
}

export default TopArtistsItems;
