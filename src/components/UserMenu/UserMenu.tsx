import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/authSlice";

import { useLogOutUserMutation } from "redux/user/userApi";
import defaultAva from "img/ava.png";

import { Box, Ava, Name } from "./UserMenu.styled";

export default function UserMenu() {
  const [logOutUser] = useLogOutUserMutation();
  const userName = useSelector(selectCurrentUser);
  const avatar = defaultAva;

  return (
    <Box>
      <Ava src={avatar} alt="" width="32" />
      <span>
        Welcome, <Name> {userName}</Name>
      </span>
      <button type="button" onClick={logOutUser}>
        Log Out
      </button>
    </Box>
  );
}
