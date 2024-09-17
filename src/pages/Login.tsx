import { Button } from "@/components/ui/button";
import Container from "../shared/Container";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { TErrorResponse, TInputs } from "./HomePageComponents/Register";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { userLogin } from "@/redux/features/auth/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm<TInputs>();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await loginUser(userInfo).unwrap();
      const { user, accessToken, refreshToken } = response?.data || {};
      console.log(response?.data);
      if (user && accessToken && refreshToken) {
        dispatch(userLogin({ user, accessToken, refreshToken }));
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      const err = error as TErrorResponse;
      console.error(err.message);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center bg-primary-text">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-items grid grid-cols-1 gap-4">
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
