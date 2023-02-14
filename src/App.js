import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from './components/SignUp/Signup';
import Header from './components/Header/Header';
import Welcome from "./components/pages/Welcome";

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Signup/> },
      {path:'/welcome', element:<Welcome/>}
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;