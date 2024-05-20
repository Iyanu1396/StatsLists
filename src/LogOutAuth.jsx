const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    const logoutWindow = window.open(
      "https://accounts.spotify.com/en/logout",
      "_blank"
    );
    logoutWindow.close();
    window.location = "/";
  };