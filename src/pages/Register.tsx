import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/shared/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { userRegister } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

export type TInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type TErrorResponse = {
  message: string;
  status?: number;
  data?: object;
};

const Register = () => {
  const { register, handleSubmit } = useForm<TInputs>();
  const dispatch = useAppDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await registerUser(userInfo).unwrap();
      const toastId = toast.loading("User Registration In Process", {
        duration: 3000,
        position: "top-center",
      });
      dispatch(userRegister({ user: response.data }));
      navigate("/login");
      toast.success("User Registration Successful", {
        id: toastId,
        duration: 3000,
        position: "top-center",
      });
    } catch (error) {
      const err = error as TErrorResponse;
      toast.error("User Registration Failed", {
        duration: 3000,
        position: "top-center",
      });
      console.log(err);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center bg-primary-text">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-items grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="firstName">
              <label htmlFor="first_Name" className="font-semibold text-black">
                First Name*
              </label>
              <Input
                type="text"
                id="first_Name"
                className="border-black"
                {...register("firstName")}
              />
            </div>

            <div className="lastName">
              <label htmlFor="last_Name" className="font-semibold text-black">
                Last Name*
              </label>
              <Input
                type="text"
                id="last_Name"
                className="border-black"
                {...register("lastName")}
              />
            </div>

            <div className="">
              <label htmlFor="email" className="font-semibold text-black">
                Email*
              </label>
              <Input
                type="email"
                id="email"
                className="border-black"
                {...register("email")}
              />
            </div>
            <div className="">
              <label htmlFor="password" className="font-semibold text-black">
                Password*
              </label>
              <Input
                type="password"
                id="password"
                className="border-black"
                {...register("password")}
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
                Register
              </Button>
            )}
          </div>
        </form>
        <div className="mt-4 sm:mt-0">
          <p className="text-sm text-black font-medium">
            Already Have An Account?{" "}
            <Link className="text-primary-color" to="/login">
              Login Here
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Register;
