import { RouteObject } from 'react-router-dom';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Realtor from "./pages/Realtor";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/realtor",
    element: <Realtor />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]; 