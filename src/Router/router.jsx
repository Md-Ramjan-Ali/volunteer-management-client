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
import VolunteerDetails from "../Pages/VolunteerDetails/VolunteerDetails";
import UpdateMyPost from "../Pages/UpdateMyPost/UpdateMyPost";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import DashLayOut from "../Pages/Dashboard/DashLayout/DashLayOut";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyVolunteer from "../Pages/Dashboard/MyVolunteer/MyVolunteer";
import MyRequest from "../Pages/Dashboard/MyRequest/MyRequest";


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
        path: "/allVolunteerPosts",
        Component: AllVolunteerPosts,
      },
      {
        path: "/volunteerDetails/:id",
        element: (
          <PrivetRouter>
            <VolunteerDetails></VolunteerDetails>
          </PrivetRouter>
        ),
      },
      // {
      //   path: "/updateMyPost/:id",
      //   element: (
      //     <PrivetRouter>
      //       <UpdateMyPost></UpdateMyPost>
      //     </PrivetRouter>
      //   ),
      // },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: About,
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
    path: "/dash",
    element: (
      <PrivetRouter>
        <DashLayOut></DashLayOut>
      </PrivetRouter>
    ),
    children: [
      {
        path: "/dash/dashboard",
        element: (
          <PrivetRouter>
            <Dashboard></Dashboard>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/addVolunteer",
        element: (
          <PrivetRouter>
            <AddVolunteer></AddVolunteer>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/myPost",
        element: (
          <PrivetRouter>
            <MyPost></MyPost>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/myVolunteerList",
        element: (
          <PrivetRouter>
            <MyVolunteer></MyVolunteer>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/myRequest",
        element: (
          <PrivetRouter>
            <MyRequest></MyRequest>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/updateMyPost/:id",
        element: (
          <PrivetRouter>
            <UpdateMyPost></UpdateMyPost>
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
