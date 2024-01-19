import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import Portfolio from "../Components/Portfolio/Portfolio";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Banner />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])