import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in user with email and password
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(user);
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 1500);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Incorrect Email and Password!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login | SebaConnect</title>
      </Helmet>
      <div
        className="card bg-base-200 dark:bg-gray-900 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10 "
        data-aos="zoom-in"
        data-aos-easing="linear"
      >
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSignIn} className="fieldset">
            {/* email  */}
            <label className="label dark:text-white">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200 dark:bg-transparent focus:outline-0 border border-gray-400"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <div className="relative">
              <label className="label dark:text-white">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input bg-base-200 dark:bg-transparent focus:outline-0 border border-gray-400"
                placeholder="Password"
                required
              />
              <p
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute top-6.5 right-6"
              >
                {showPassword ? (
                  <FaEyeSlash size={15}></FaEyeSlash>
                ) : (
                  <FaEye size={15}></FaEye>
                )}
              </p>
            </div>

            <div>
              <Link className="link link-hover">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="btn bg-primary hover:bg-secondary  text-white mt-4"
            >
              Login
            </button>
          </form>
          <p className="font-semibold text-center pt-5">
            Dont't Have An Account ?{" "}
            <Link className="text-[#22c55e] underline" to="/auth/register">
              Register
            </Link>
          </p>
          {/* google login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
