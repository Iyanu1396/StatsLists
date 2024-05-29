export async function fetchTopArtistsId(token, storedToken) {
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

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getTopTracks(artistId, token, storedToken) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
    {
      params: { market: "US" },
      headers: {
        Authorization: `Bearer ${token || storedToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  let data = await res.json();

  const trackUris = data.tracks.slice(0, 3).map((track) => track.uri);

  return trackUris;
}

export async function fetchUserID(token, storedToken) {
  try {
    const res = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token || storedToken}` },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user ID");
    }

    const data = await res.json();

    return data.id;
  } catch (err) {
    console.log(err);
  }
}

export async function addTracksToPlaylists(
  playListID,
  token,
  storedToken,
  trackUris,
) {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playListID}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token || storedToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: trackUris,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Error adding tracks to playlist`);
    }

    const data = await response.json();

   console.log('tracks added')

   return data
  } catch (error) {
    console.error(error);
  }
}
