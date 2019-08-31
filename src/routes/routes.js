import Home from "../layout/Home/Home";
import Store from "../layout/Store/Store";
import Dashboard from "../layout/Dashboard/Dashboard";
import NotFound from "../layout/NotFound/NotFound";

export const HOME = "Home";
export const ENDPOINT_DEFAULT = "/";
export const ENDPOINT_HOME = "/home";

export const STORE = "Store";
export const ENDPOINT_STORE = "/store";

export const DASHBOARD = "Dashboard";
export const ENDPOINT_DASHBOARD = "/dashboard";

const routes = [
  {
    name: HOME,
    path: ENDPOINT_DEFAULT,
    exact: true,
    component: Home
  },
  {
    name: STORE,
    path: ENDPOINT_STORE,
    component: Store
  },
  {
    name: DASHBOARD,
    path: ENDPOINT_DASHBOARD,
    component: Dashboard
  },
  {
    name: "Home-Redirect",
    from: ENDPOINT_HOME,
    to: ENDPOINT_DEFAULT
  },
  {
    name: "Not-Found",
    component: NotFound
  }
];

export default routes;
export const links = routes.filter(route => route.path);
