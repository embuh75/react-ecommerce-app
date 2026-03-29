import { useState } from "react";
import { useAuth } from "../lib/context/AuthContext";

import UserProfileDropdown from "./UserProfileDropdown";
import AvatarButton from "./AvatarButton";

export default function AvatarMenu() {
  const { user, signOut } = useAuth();
  const [avatar, setAvatar] = useState(false);

  const handleAvatar = () => {
    setAvatar(!avatar);
  };

  return (
    <div className="">
      <AvatarButton handleAvatar={handleAvatar} avatar={avatar} user={user}/>
      {avatar && <UserProfileDropdown signOut={signOut} user={user} />}
    </div>
  );
}
