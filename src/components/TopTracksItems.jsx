import { useSelector } from "react-redux";

function TopTracksItems() {
  const { topTracks } = useSelector((state) => state.userData);
  console.log(topTracks);

  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default TopTracksItems;
