import { useSelector } from "react-redux";

function UserData() {
  const { userData } = useSelector((state) => state.authentication);

  return (
    <div>
      {userData ? (
        <>
          <img src={userData.images[1].url} alt="" />
          <p>{userData.display_name}</p>
          <p>{userData.email}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserData;
