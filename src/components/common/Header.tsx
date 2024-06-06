import { Avatar, IconButton } from "components/ui";
import { avatarImg, logo, logoutIcon } from "constants/assets";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { signOut } from "store/slices/authSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <div className="py-4 bg-white shadow-md flex justify-between items-center max-md:px-2 px-16">
      <img src={logo} alt="logo" className="h-[35px] w-[137px]" />

      <div className="flex gap-8 items-center">
        <Avatar image={avatarImg} label={user?.name || "Hi there!"} />
        <IconButton icon={logoutIcon} onClick={signOutHandler} />
      </div>
    </div>
  );
};

export default Header;
