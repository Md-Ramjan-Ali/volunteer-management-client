import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Terms from "../Pages/Terms/Terms";
import Privacy from "../Pages/Privacy/Privacy";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import AllVolunteerPosts from "../Pages/AllVolunteerPosts/AllVolunteerPosts";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AddVolunteer from "../Pages/MyProfile/AddVolunteer";
import MyPost from "../Pages/MyProfile/MyPost";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/allVolunteerPosts',
        Component: AllVolunteerPosts
      },
      {
        path: '/addVolunteer',
        element: <PrivetRouter><AddVolunteer></AddVolunteer></PrivetRouter>
      },
      {
        path: '/myPost',
        element: <PrivetRouter><MyPost></MyPost></PrivetRouter>
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
