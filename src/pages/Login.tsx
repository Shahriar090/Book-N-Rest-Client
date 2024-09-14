import { Button } from "@/components/ui/button";
import Container from "../shared/Container";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-primary-text">
      <Container>
        <form>
          <div className="form-items grid grid-cols-1 gap-4">
            <div className="">
              <label htmlFor="email" className="font-semibold text-black">
                Email*
              </label>
              <Input type="email" id="email" className="border-black" />
            </div>
            <div className="">
              <label htmlFor="password" className="font-semibold text-black">
                Password*
              </label>
              <Input type="password" id="password" className="border-black" />
            </div>
          </div>
          {/* submit button */}
          <div className="mt-4 flex justify-end">
            <Button
              variant="default"
              className="px-8 py-5 text-primary-text font-semibold bg-primary-color"
            >
              Login
            </Button>
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
