import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TInputs } from "@/pages/Register";
import { useUpdateUserMutation } from "@/redux/features/auth/authApi";
import { getCurrentUser, updatedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Container from "@/shared/Container";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const DashProfile = () => {
  const { register, handleSubmit } = useForm<TInputs>();
  const currentUser = useAppSelector(getCurrentUser);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const userInfos = new FormData();
    userInfos.append("firstName", data.firstName);
    userInfos.append("lastName", data.lastName);
    userInfos.append("email", data.email);
    userInfos.append("password", data.password);

    if (selectedFile) {
      userInfos.append("avatarImage", selectedFile);
    }
    try {
      const response = await updateUser({
        userId: currentUser?._id,
        userInfos,
      }).unwrap();
      dispatch(
        updatedUser({
          user: {
            firstName: data.firstName || currentUser?.firstName,
            lastName: data.lastName || currentUser?.lastName,
            email: data.email || currentUser?.email,
            avatarImage: selectedFile
              ? URL.createObjectURL(selectedFile)
              : currentUser?.avatarImage,
          },
        })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };
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

      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-items grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="firstName">
              <label
                htmlFor="first_Name"
                className="font-semibold text-black dark:text-secondary-text"
              >
                First Name*
              </label>
              <Input
                type="text"
                id="first_Name"
                {...register("firstName")}
                defaultValue={currentUser?.firstName}
              />
            </div>

            <div className="lastName">
              <label
                htmlFor="last_Name"
                className="font-semibold text-black dark:text-secondary-text"
              >
                Last Name*
              </label>
              <Input
                type="text"
                id="last_Name"
                {...register("lastName")}
                defaultValue={currentUser?.lastName}
              />
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="font-semibold text-black dark:text-secondary-text"
              >
                Email*
              </label>
              <Input
                type="email"
                id="email"
                {...register("email")}
                defaultValue={currentUser?.email}
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="font-semibold text-black dark:text-secondary-text"
              >
                Password*
              </label>
              <Input type="password" id="password" {...register("password")} />
            </div>
            <div className="">
              <label
                htmlFor="avatarImage"
                className="font-semibold text-black dark:text-secondary-text"
              >
                Avatar Image*
              </label>
              <Input
                type="file"
                id="avatarImage"
                accept="image/*"
                className="border-black dark:border-secondary-text"
                {...register("avatarImage")}
                onChange={handleFileChange}
              />
            </div>
          </div>
          {/* submit button */}
          <div className="mt-4 flex justify-end">
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              <Button
                variant="default"
                className="px-8 py-5 text-primary-text font-semibold bg-primary-color"
              >
                Update Now
              </Button>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
};

export default DashProfile;
