import { Button } from "@/components/ui/button";
import Container from "../shared/Container";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TErrorResponse, TInputs } from "./Register";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { userLogin } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const Login = () => {
  const { register, handleSubmit } = useForm<TInputs>();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const toastId = toast.loading("Logging In, Please Wait", {
      duration: 3000,
      position: "top-center",
    });
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await loginUser(userInfo).unwrap();
      const { user, accessToken, refreshToken } = response?.data || {};
      console.log(response?.data);
      if (user && accessToken && refreshToken) {
        dispatch(userLogin({ user, accessToken, refreshToken }));
        toast.success("Login Successful", {
          id: toastId,
          duration: 3000,
          position: "top-center",
        });
        navigate(from, { replace: true });
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      toast.error("Login Failed, Wrong Credentials!", {
        id: toastId,
        duration: 3000,
        position: "top-center",
      });
      const err = error as TErrorResponse;
      console.error(err);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center bg-primary-text dark:bg-dark-theme">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-items grid grid-cols-1 gap-4">
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
                className="border-black"
                {...register("email")}
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="font-semibold text-black dark:text-secondary-text"
              >
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
              <p>Loading... </p>
            ) : (
              <Button
                variant="default"
                className="px-8 py-5 text-primary-text font-semibold bg-primary-color"
              >
                Login
              </Button>
            )}
          </div>
        </form>
        <div>
          <p className="text-sm text-black font-medium">
            New Here?{" "}
            <Link className="text-primary-color" to="/register">
              Register First
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Login;
