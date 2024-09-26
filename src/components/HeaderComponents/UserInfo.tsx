import { getCurrentUser, userLogout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { TErrorResponse } from "@/pages/Register";

const UserInfo = () => {
  const currentUser = useAppSelector(getCurrentUser);
  const dispatch = useAppDispatch();
  const [logoutUser] = useLogoutMutation();
  const handleLogout = async () => {
    const toastId = toast.loading("Logging Out", {
      duration: 2000,
      position: "top-center",
    });
    if (!currentUser?._id) {
      toast.error("User Not Logged In", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      return;
    }

    try {
      const validUser = { id: currentUser?._id };
      await logoutUser(validUser);
      dispatch(userLogout());
      toast.success("Logout Successful", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
    } catch (error) {
      const err = error as TErrorResponse;
      toast.error(err?.message, {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
    }
  };
  return (
    <div>
      {currentUser ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar title="Click Here To See Profile Details" className="">
              <AvatarImage src={currentUser?.avatarImage} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {`User Name : ${currentUser?.firstName} ${currentUser?.lastName}`}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {`Role : ${currentUser?.isAdmin === false ? "User" : "Admin"}`}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {`Email : ${currentUser?.email}`}
            </DropdownMenuItem>
            {/* TODO : WILL BE ADDED EDIT PROFILE FUNCTIONALITY */}
            <DropdownMenuItem>
              <Button variant="secondary" size="sm" className="w-full">
                Edit Profile
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={handleLogout}
                variant="destructive"
                size="sm"
                className="w-full"
              >
                LogOut
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/register">
          <Button
            variant="secondary"
            className="px-8 py-4 text-primary-color font-semibold dark:text-secondary-text"
          >
            Sign Up
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserInfo;
