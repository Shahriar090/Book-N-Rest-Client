import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/shared/Container";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-primary-text">
      <Container>
        <form>
          <div className="form-items grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="firstName">
              <label htmlFor="first_Name" className="font-semibold text-black">
                First Name*
              </label>
              <Input type="text" id="first_Name" className="border-black" />
            </div>

            <div className="lastName">
              <label htmlFor="last_Name" className="font-semibold text-black">
                Last Name*
              </label>
              <Input type="text" id="last_Name" className="border-black" />
            </div>

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
              Register
            </Button>
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
