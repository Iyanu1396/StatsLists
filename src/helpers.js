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

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTopTracksUris(token, storedToken) {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token || storedToken}` },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch top tracks");
    }

    const data = await res.json();
    const uris = data.items.map((track) => track.uri);
    return uris;
  } catch (err) {
    console.log(err);
  }
}

export async function createPlayList(userID, token, storedToken) {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token || storedToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "My Most Streamed Tracks Playlist",
          description:
            "A playlist of my most streamed tracks (created with SpotList by IyanuOluwa)",
          public: false,
        }),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to create playlist");
    }

    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
