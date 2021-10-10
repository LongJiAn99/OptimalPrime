
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
//import ManageAccountsIcon from "@material-ui/icons/ManageAccounts";
// core components/views for layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";
import EmployeeList from "views/EmployeeList/EmployeeList.js";

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
    name: "Task List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },

  {
    path: "/employee",
    name: "List of Employees",
    icon: "manage_accounts",
    component: EmployeeList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
