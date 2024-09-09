import Container from "../shared/Container";

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-primary-text">
      <Container>
        <form className="p-0 md:p-24 md:shadow-md rounded-md ">
          <div className="form-items grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="firstName">
              <label htmlFor="first_Name" className="font-semibold text-black">
                First Name*
              </label>
              <input
                type="text"
                id="first_Name"
                className="border-2 border-black rounded-md w-full px-4 py-2"
              />
            </div>

            <div className="lastName">
              <label htmlFor="last_Name" className="font-semibold text-black">
                Last Name*
              </label>
              <input
                type="text"
                id="last_Name"
                className="border-2 border-black rounded-md w-full px-4 py-2"
              />
            </div>

            <div className="">
              <label htmlFor="email" className="font-semibold text-black">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-black rounded-md w-full px-4 py-2"
              />
            </div>
            <div className="">
              <label htmlFor="password" className="font-semibold text-black">
                Password*
              </label>
              <input
                type="password"
                id="password"
                className="border-2 border-black rounded-md w-full px-4 py-2"
              />
            </div>
          </div>
          {/* submit button */}
          <div className="mt-4 flex justify-end">
            <button className="px-8 py-2 text-primary-text font-semibold bg-primary-color rounded-md hover:bg-secondary-text">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Login;
