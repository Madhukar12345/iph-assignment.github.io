import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import Home1 from "./views/pages/Home/Components/Home1";
import About from "./views/pages/Home/Components/About";
import Contact_us from "./views/pages/Home/Components/Contact_us";


export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/Home1",
    component: lazy(() => import("src/views/pages/Home/Components/Home1")),
  },
  {
    exact: true,
    path: "/About",
    component: lazy(() => import("src/views/pages/Home/Components/About")),
  },
  {
    exact: true,
    path: "/Contact_us",
    component: lazy(() => import("src/views/pages/Home/Components/Contact_us")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
