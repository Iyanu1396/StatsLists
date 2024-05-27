import { useSelector } from "react-redux";

function TopArtistsItems() {
  const { topArtists } = useSelector((state) => state.userData);

  return (
    <div className="grid-cols-1-xs grid grid-cols-2 gap-5 font-mont sm:grid-cols-3 text-stone-900  md:grid-cols-4  lg:grid-cols-5 ">
      {topArtists?.map((artist) => (
        <div
          className="flex flex-col  items-center px-3 tracking-wide"
          key={artist?.name}
        >
          <img
            className=" h-[90px] w-[90px] rounded-full cursor-pointer"
            src={artist?.images[0].url}
            alt=""
          />
          <div className=" mt-2 text-center">
            <p className="mb-2 font-bold">
              {artist?.name}{" "}
              <a href={artist.href}>
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
