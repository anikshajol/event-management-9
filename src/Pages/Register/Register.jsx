import { FcGoogle } from "react-icons/fc";
import registerbg from "../../assets/sergio-butko-C3kMhyYeG28-unsplash.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${registerbg})`,
        }}
        className=" hero h-screen  "
      >
        <div className="hero-overlay bg-black bg-opacity-80 "></div>
        <div className="w-full mx-auto max-w-sm p-4 bg-transparent  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-white dark:text-white">
              Create an Account
            </h5>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button type="submit" className="w-full primary-btn">
              Login to your account
            </button>

            <button className="w-full py-2 border border-[#ffbe30] btn-outline text-white rounded-3xl">
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">
                  <FcGoogle />
                </div>
                <div>Login With Google</div>
              </div>
            </button>
            <div className="text-sm text-center font-medium text-white dark:text-gray-300">
              Already Have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
