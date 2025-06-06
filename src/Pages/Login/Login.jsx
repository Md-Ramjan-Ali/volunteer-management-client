import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
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
        console.log(error);
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
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10 ">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSignIn} className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <Link className="link link-hover">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-700 text-white mt-4"
            >
              Login
            </button>
          </form>
          <p className="font-semibold text-center pt-5">
            Dont't Have An Account ?{" "}
            <Link className="text-green-500 underline" to="/auth/register">
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
