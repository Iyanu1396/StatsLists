

export async function fetchTopArtistsId(token , storedToken) {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token || storedToken}` },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch top artists id");
    }

    let data = await res.json();

    data = data.items.map((artist) => artist.id);

   

    return  data;
  } catch (err) {
    console.log(err);
  }
}
