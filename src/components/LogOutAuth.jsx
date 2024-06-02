const handleLogout = () => {
  localStorage.removeItem("token");
  const logoutWindow = window.open(
    "https://accounts.spotify.com/en/logout",
    "_blank",
  );
  logoutWindow.close();
  window.location = "/";
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
