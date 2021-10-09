
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",

  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
