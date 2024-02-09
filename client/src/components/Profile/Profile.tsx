"use client";

import { FC, use, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import toast from "react-hot-toast";
import ProfileInfo from "./ProfileInfo";

interface ProfileProps {
  user: any;
}

const Profile: FC<ProfileProps> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [logOut] = useLogOutMutation();
  const [active, setActive] = useState(1);

  const logOutHandler = async () => {
    await logOut(undefined);

    signOut();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 55) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className=" mx-auto gap-6 flex w-full 800px:w-[85%] pr-3 ">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] bg-background dark:bg-background-dark bg-opacity-90 border dark:border-[#1E1E1E] rounded-[16px] shadow-sm sticky top-[120px] left-[10px] md:left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
      <div className=" w-full h-full mt-[120px]">
        {active === 1 && <ProfileInfo avatar={avatar} user={user} />}
        {active === 2 && <ProfileInfo avatar={avatar} user={user} />}
      </div>
    </div>
  );
};

export default Profile;
