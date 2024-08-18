const handleLogout = () => {
  localStorage.removeItem("token");
  
  // Open Spotify logout page in a new incognito window
  const logoutWindow = window.open(
    "https://accounts.spotify.com/en/logout",
  );

  // Set a timeout to close the window after a delay to ensure the logout process completes
  setTimeout(() => {
    if (logoutWindow) {
      logoutWindow.close();
    }
    // Redirect to the home page after closing the logout window
    window.location = "/";
  }, 2000);
};

function LogOutAuth() {
  return (
    <div>
      <button
        className="rounded bg-red-500 mt-3 px-4 hover:bg-red-400 py-1 font-mono font-bold text-green-950"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
}

export default LogOutAuth;
