import Home from "../layout/Home/Home";
import Store from "../layout/Store/Store";
import Dashboard from "../layout/Dashboard/Dashboard";
import NotFound from "../layout/NotFound/NotFound";

//  Main routes
const HOME = "Home";
const ROUTE_DEFAULT = "/";
const ROUTE_HOME = "/home";

const STORE = "Store";
const ROUTE_STORE = "/store";

const DASHBOARD = "Dashboard";
const ROUTE_DASHBOARD = "/dashboard";

const routes = [
  {
    name: HOME,
    path: ROUTE_DEFAULT,
    exact: true,
    component: Home
  },
  {
    name: STORE,
    path: ROUTE_STORE,
    component: Store
  },
  {
    name: DASHBOARD,
    path: ROUTE_DASHBOARD,
    component: Dashboard
  },
  {
    name: "Home-Redirect",
    from: ROUTE_HOME,
    to: ROUTE_DEFAULT
  },
  {
    name: "Not-Found",
    component: NotFound
  }
];
export default routes;
export const links = routes.filter(route => route.path);

//  Store routes
const WEAPONS = "Weapons";
const ROUTE_WEAPONS = "/store/weapons";
const ITEMS = "Items";
const ROUTE_ITEMS = "/store/items";

export const storeRoutes = [
  {
    name: WEAPONS,
    path: ROUTE_WEAPONS,
    render: true /*When true the caller must provide a component here*/
  },
  {
    name: ITEMS,
    path: ROUTE_ITEMS,
    render: true /*When true the caller must provide a component here*/
  },
  {
    name: "Store-Redirect",
    from: ROUTE_STORE,
    to: ROUTE_WEAPONS
  },
  {
    name: "Not-Found",
    component: NotFound
  }
];
export const storeLinks = storeRoutes.filter(route => route.path);
