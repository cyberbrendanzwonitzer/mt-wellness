import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Science } from "./components/Science";
import { About } from "./components/About";
import { Blog } from "./components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "pricing", Component: Pricing },
      { path: "science", Component: Science },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
    ],
  },
]);