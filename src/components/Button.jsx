function Button({ children, handleCreatePlaylist, isLoading , handleResetPlayList }) {
  return (
    <button
      disabled={isLoading}
      onClick={handleCreatePlaylist || handleResetPlayList}
      className="transform-all max-w-[350px]  rounded-full border bg-green-500 px-7 py-5 font-mont  text-base font-bold text-green-950 duration-300 hover:bg-green-400 hover:ring-2 hover:ring-green-500 hover:ring-offset-1 disabled:cursor-not-allowed sm:max-w-[550px]  sm:px-10 sm:text-lg "
    >
      {children}
    </button>
  );
}

export default Button;
