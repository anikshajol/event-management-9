import { Link } from "react-router-dom";
import loginBg from "../../assets/login-bg.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { name } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
      className=" hero h-screen "
    >
      <div className="hero-overlay bg-black bg-opacity-70 "></div>
      <div className="w-full mx-auto max-w-sm p-4 bg-transparent  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogin} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-white dark:text-white">
            Sign in to our platform
          </h5>
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
          <div className="text-sm font-medium text-center text-white dark:text-gray-300">
            Not registered?{" "}
            <Link
              to={"/register"}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
