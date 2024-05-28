import { useSelector } from "react-redux";

function TopTracksItems() {
  const { topTracks } = useSelector((state) => state.userData);



  return (
    <div className="grid-cols-1-xs grid grid-cols-2 gap-7 font-mont tracking-wide  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5">
      {topTracks.map((track, i) => (
        <div
          className="flex flex-col  items-center px-3 tracking-wide"
          key={track.id}
        >
          <img
            className="h-[120px] w-[120px] pb-3 md:h-[150px] md:w-[150px]"
            src={track.album.images[1].url}
            alt=""
          />
          <p className="cursor text-center font-bold text-green-950">
            <a href={track.href}>
              <span className="pr-2">{i + 1}.</span>
              {track.name}
              <i className="fa-brands fa-spotify pl-1 text-green-500"></i>
            </a>
          </p>
          {track.artists.map((artist, i, arr) => (
            <p
              className="cursor text-center font-semibold text-green-800"
              key={artist?.id}
            >
              <a href={artist.href}>{artist.name}</a>
              {i < arr.length - 1 && ", "}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TopTracksItems;
