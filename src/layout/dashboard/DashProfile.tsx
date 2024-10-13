import { getCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

const DashProfile = () => {
  const currentUser = useAppSelector(getCurrentUser);
  return (
    <div>
      <div className="banner w-full h-[250px] bg-primary-color"></div>
      <div className="flex gap-3">
        <div className="profile-image -mt-44">
          <img
            src={currentUser?.avatarImage}
            alt="User Avatar"
            className="h-44 w-44 rounded-full ring-2 cursor-pointer"
          />
        </div>

        <div className="user-details -mt-32">
          <p className="text-primary-text text-2xl">
            {currentUser?.firstName} {currentUser?.lastName}
          </p>
          <p className="text-primary-text">
            {currentUser?.isAdmin === false ? "User" : "Admin"}
          </p>
          <p>{currentUser?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
