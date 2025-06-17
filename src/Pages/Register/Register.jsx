import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { Slide, toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(
      formData.entries()
    );

    //password validation
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    if (password.length < 6 || !upper || !lower) {
      toast.error(
        "Password must be at least 6 characters and include uppercase and lowercase letters",
        {
          position: "top-center",
          autoClose: 4000,
          theme: "light",
          transition: Slide,
        }
      );
      return;
    }

    //create user with email,password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Register Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        //update profile
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          setTimeout(() => {
            navigate(`${location.state ? location.state : "/"}`);
          }, 1500);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Register | SebaConnect</title>
      </Helmet>
      <div
        className="card bg-base-200 dark:bg-gray-900 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10"
        data-aos="zoom-in"
        data-aos-easing="linear"
      >
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleSignUp} className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input bg-base-200 dark:bg-transparent focus:outline-0 border border-gray-400"
              placeholder="Name"
              required
            />

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input bg-base-200 dark:bg-transparent focus:outline-0 border border-gray-400"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200 dark:bg-transparent focus:outline-0 border border-gray-400"
              placeholder="Email"
              required
            />

            {/* password  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input bg-base-200 dark:bg-transparent focus:outline-0 border border-gray-400"
                placeholder="Password"
                required
                title="Must be at least 6 characters, lowercase letter, uppercase letter"
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
            <button
              type="submit"
              className="btn bg-primary hover:bg-secondary  text-white mt-4"
            >
              Register
            </button>
          </form>
          <p className="font-semibold text-center pt-5">
            Already Have An Account ?{" "}
            <Link className="text-[#22c55e] underline" to="/auth/login">
              Login
            </Link>
          </p>

          {/* google login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
