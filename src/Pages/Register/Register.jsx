import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { Slide, toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUser, signInGoogle } = use(AuthContext);
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

  const handleSignInGoogle = () => {
    signInGoogle()
      .then((result) => {
        const googleUser = result.user;
        toast.success("Google Login Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUser(googleUser);
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 1500);
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
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Sign UP now!</h1>
          <form onSubmit={handleSignUp} className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
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
              className="btn bg-green-500 hover:bg-green-700 text-white mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="font-semibold text-center pt-5">
            Already Have An Account ?{" "}
            <Link className="text-green-500 underline" to="/auth/login">
              Login
            </Link>
          </p>

          {/* google login */}
          <div className="text-center">
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Or login with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div>
              {/* login with google */}
              <button
                onClick={handleSignInGoogle}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
