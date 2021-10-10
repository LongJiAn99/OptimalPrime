//import TaskData from "components/Data/Tasks.json";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  //DialogContentText,
} from "@material-ui/core";
import EmployeeTableData from "components/Data/EmployeeTableData.js";

//import TableCell from "@material-ui/core/TableCell";

import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

const Dept = (props) => {

   
  const [open, setOpen] = React.useState(false);
  const [ssRequired, setssRequired] = React.useState("");
  

  const handleOpen = (skillset) => {
    setssRequired(skillset);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false); 
  }

  React.useEffect(() => {
    setssRequired(ssRequired);
    console.log("hi");
  }, [ssRequired]);
  

  const tableHeaderColor =  'primary'
  const classes = useStyles();
    return (
      <div className = {classes.tableResponsive}>
        <Table className ={classes.table}>
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeaderRow}>
              <th>Resources</th>
              <th>Criticality</th>
              <th>Equipment</th>
              <th>Due Date</th>
              <th>Skill Sets Required</th>
              </TableRow>
            </TableHead>
            <TableBody >
      
      {test.filter(t => t.department === props.deptString).map(t => (
      <TableRow key={t.department} className={classes.tableBodyRow} hover = {true} onClick={()=> {handleOpen(t.skillsetRequired)}}>
                <td>{t.resources}</td>
                <td>{t.criticality}</td>
                <td>{t.equipment}</td>
                <td>{t.dueDate.substring(0,10) + " " + t.dueDate.substring(11,16)}</td>
                <td>{t.skillsetRequired}</td>   
          </TableRow>
          ))}         
            </TableBody>
        </Table>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Suitable Employees to Transfer"} 
        </DialogTitle>
        <DialogContent>
          <EmployeeTableData ssRequired={ssRequired}/>
        </DialogContent>
        <DialogActions>
          </DialogActions>
          </Dialog>
        </div>      
    )  
    }



export default Dept;

Dept.defaultProps = {
  tableHeaderColor: "gray",
};

Dept.propTypes = {
  deptString: PropTypes.string,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  forDashboard: PropTypes.boolean
};



const test = 
[
  {
    "_id": "6162b97acf87ad08aa8a3965",
    "index": 0,
    "resources": 3,
    "department": "B",
    "dueDate": "2022-02-07T09:49:37 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a6b4dec9211f7c3d1",
    "index": 1,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-07-22T01:22:59 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a673848635d911832",
    "index": 2,
    "resources": 3,
    "department": "A",
    "dueDate": "2022-11-15T11:32:23 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a1ae4e35fbf4b6c7e",
    "index": 3,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-02-11T05:44:18 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ace8f5f6375618624",
    "index": 4,
    "resources": 4,
    "department": "E",
    "dueDate": "2022-06-18T07:15:49 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97aa51e47e5f39c9aa9",
    "index": 5,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-08-13T06:49:18 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a056c5ccec3d79e77",
    "index": 6,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-12-22T09:40:56 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97adcb9ae4912cc4373",
    "index": 7,
    "resources": 3,
    "department": "F",
    "dueDate": "2023-01-20T09:28:40 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a96a635506800a6de",
    "index": 8,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-11-07T03:26:58 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a475e9d4f857b60a9",
    "index": 9,
    "resources": 2,
    "department": "C",
    "dueDate": "2022-01-21T10:10:36 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a63753462268f3f72",
    "index": 10,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-11-11T02:26:52 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a31ea7671d5875277",
    "index": 11,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-05-21T06:12:35 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a956b67dc0392cb3f",
    "index": 12,
    "resources": 3,
    "department": "A",
    "dueDate": "2022-05-25T09:47:04 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a58e601b1d8f1f48b",
    "index": 13,
    "resources": 4,
    "department": "D",
    "dueDate": "2021-12-21T07:21:45 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a3c6486e3db998030",
    "index": 14,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-06-21T12:48:55 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a5c00686c16d61265",
    "index": 15,
    "resources": 2,
    "department": "E",
    "dueDate": "2023-01-28T01:58:55 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a7fefc341d8d94e49",
    "index": 16,
    "resources": 4,
    "department": "F",
    "dueDate": "2022-02-02T09:27:35 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97af07b305e883aa0ca",
    "index": 17,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-07-25T05:40:01 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a055270c99afc754a",
    "index": 18,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-05-25T05:10:34 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97ad41d15be929665e1",
    "index": 19,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-01-20T11:13:35 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a0a7e4a9f29e32551",
    "index": 20,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-01-01T06:03:16 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97af6399db89b78a286",
    "index": 21,
    "resources": 2,
    "department": "F",
    "dueDate": "2022-02-16T04:53:40 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a53bd9ed9259b0ff1",
    "index": 22,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-06-08T12:43:09 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ad22003ddccf80112",
    "index": 23,
    "resources": 4,
    "department": "B",
    "dueDate": "2023-01-25T04:49:16 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a7014f8b30ff02426",
    "index": 24,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-05-10T06:53:07 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a717a5ef13addbb11",
    "index": 25,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-06-07T10:31:50 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97aef1020c8eb101de2",
    "index": 26,
    "resources": 4,
    "department": "B",
    "dueDate": "2022-07-25T12:08:47 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97af852f4b0ccdf3fc7",
    "index": 27,
    "resources": 2,
    "department": "F",
    "dueDate": "2022-07-27T02:55:39 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a524de754e6e4709e",
    "index": 28,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-09-21T05:17:55 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a7d4691d09748181c",
    "index": 29,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-08-10T09:34:03 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a455b972b3aa50ec8",
    "index": 30,
    "resources": 3,
    "department": "A",
    "dueDate": "2021-12-30T12:13:07 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97abf4336032aa58ff7",
    "index": 31,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-10-31T07:02:19 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ab6c6bae8953ef42c",
    "index": 32,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-07-27T12:18:36 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ae8729ee15509786f",
    "index": 33,
    "resources": 3,
    "department": "F",
    "dueDate": "2022-04-29T12:25:02 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ac715d5f8edecf16c",
    "index": 34,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-09-06T03:07:38 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ae53844c65dd28806",
    "index": 35,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-09-21T08:05:19 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a3c93bf90097426bd",
    "index": 36,
    "resources": 2,
    "department": "E",
    "dueDate": "2022-11-26T09:29:52 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a6db325d8073a393b",
    "index": 37,
    "resources": 2,
    "department": "C",
    "dueDate": "2022-07-10T09:23:39 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97af89ab68b98058e17",
    "index": 38,
    "resources": 3,
    "department": "B",
    "dueDate": "2022-07-16T11:07:55 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a9260e2f5cc854cb7",
    "index": 39,
    "resources": 3,
    "department": "F",
    "dueDate": "2022-12-12T04:47:08 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a3e1a92c265b55b71",
    "index": 40,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-01-29T08:34:02 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ab444a343f7cd40f3",
    "index": 41,
    "resources": 4,
    "department": "B",
    "dueDate": "2022-02-04T07:41:11 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ae80df4968bdd44f9",
    "index": 42,
    "resources": 2,
    "department": "B",
    "dueDate": "2023-01-02T09:24:03 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97aa9c2077d64613a1b",
    "index": 43,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-10-11T06:44:25 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a1d55d1c6906c601e",
    "index": 44,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-06-23T10:16:04 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a9434b983900a7528",
    "index": 45,
    "resources": 2,
    "department": "E",
    "dueDate": "2022-10-31T05:00:49 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97aa36489f55163cd13",
    "index": 46,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-03-15T03:26:10 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a792df3887476e039",
    "index": 47,
    "resources": 4,
    "department": "E",
    "dueDate": "2022-06-24T05:34:21 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a36505f4a5e64e1dd",
    "index": 48,
    "resources": 4,
    "department": "F",
    "dueDate": "2022-01-05T09:53:12 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97af6fe14b320205e59",
    "index": 49,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-08-03T05:01:49 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a621a7a3d5fabb47b",
    "index": 50,
    "resources": 4,
    "department": "E",
    "dueDate": "2022-03-13T07:50:25 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a8f9a3fea7e1ea850",
    "index": 51,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-10-12T12:33:33 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a64f1d5fa0ce2c8dd",
    "index": 52,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-09-17T06:31:45 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a8f4caa1b2fac5d11",
    "index": 53,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-06-05T02:36:22 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97af89efaccd6ea75fe",
    "index": 54,
    "resources": 4,
    "department": "F",
    "dueDate": "2022-04-09T02:23:44 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a391a5d7553a59686",
    "index": 55,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-11-09T12:29:08 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97ab5055efa4c147a11",
    "index": 56,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-03-19T01:45:31 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a16f26dcd4b217b92",
    "index": 57,
    "resources": 2,
    "department": "C",
    "dueDate": "2023-01-05T04:01:55 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ae22d036d0a89aa95",
    "index": 58,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-10-19T10:17:41 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a5e765073880fc65e",
    "index": 59,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-01-14T05:11:44 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a0ee7b5ff67ae2eda",
    "index": 60,
    "resources": 4,
    "department": "E",
    "dueDate": "2022-01-12T02:28:56 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97aa0e74eeac57085de",
    "index": 61,
    "resources": 4,
    "department": "B",
    "dueDate": "2022-12-11T04:49:06 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a39acf1756c0f1d75",
    "index": 62,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-02-13T09:48:54 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a39a7e8c26dd6c8b7",
    "index": 63,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-04-14T11:12:24 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97ac4c57d47361f79a5",
    "index": 64,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-08-02T12:52:04 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a21c5dd68bab2cd9c",
    "index": 65,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-09-24T02:21:09 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ad3b1e38600d036b6",
    "index": 66,
    "resources": 2,
    "department": "F",
    "dueDate": "2022-01-27T01:23:32 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a0e5a622f19c77eb7",
    "index": 67,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-03-23T02:34:51 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97acc0a6999c6d8973a",
    "index": 68,
    "resources": 3,
    "department": "A",
    "dueDate": "2022-11-19T08:46:35 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a2bfe4529a3b28860",
    "index": 69,
    "resources": 2,
    "department": "C",
    "dueDate": "2023-01-24T08:50:51 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ac3ad6166f18bfce7",
    "index": 70,
    "resources": 2,
    "department": "E",
    "dueDate": "2022-08-02T02:05:11 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97afdab1f562a28f175",
    "index": 71,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-04-15T04:45:26 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a62ba553840f13906",
    "index": 72,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-11-06T04:01:32 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a64c584cff2ff9897",
    "index": 73,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-05-14T08:30:34 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a699bad1d94dbc60f",
    "index": 74,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-05-01T06:45:34 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a55b8af52076a75e2",
    "index": 75,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-07-27T03:17:56 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97aafdeedfb5a677e7a",
    "index": 76,
    "resources": 3,
    "department": "F",
    "dueDate": "2022-05-04T12:07:53 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a28b60968f09fe267",
    "index": 77,
    "resources": 4,
    "department": "E",
    "dueDate": "2022-02-01T04:54:23 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ad4473a2cf48d1771",
    "index": 78,
    "resources": 4,
    "department": "B",
    "dueDate": "2022-06-11T02:15:23 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97ace03651d0be00dd6",
    "index": 79,
    "resources": 2,
    "department": "F",
    "dueDate": "2022-10-12T12:36:18 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97abc6eaab5cd34bdbe",
    "index": 80,
    "resources": 3,
    "department": "B",
    "dueDate": "2022-02-04T07:11:38 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a649dd5ba7a97c931",
    "index": 81,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-10-14T02:03:05 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a618e544b5526c592",
    "index": 82,
    "resources": 4,
    "department": "F",
    "dueDate": "2022-05-23T10:13:01 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ab3fc69310988e36b",
    "index": 83,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-06-24T08:31:57 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a8c2a32eda7cc5466",
    "index": 84,
    "resources": 4,
    "department": "C",
    "dueDate": "2023-01-02T06:34:17 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a5a675692997ae29c",
    "index": 85,
    "resources": 2,
    "department": "C",
    "dueDate": "2023-01-10T03:33:30 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97ae744f115d9ac63ed",
    "index": 86,
    "resources": 2,
    "department": "F",
    "dueDate": "2022-10-16T12:32:56 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97abc00968695c3e53a",
    "index": 87,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-11-02T12:33:29 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a04f0bf5dbd645d9e",
    "index": 88,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-07-24T01:22:00 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a0c4943835c16a887",
    "index": 89,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-09-03T04:26:38 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97a0cf32477b6046f4e",
    "index": 90,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-11-21T01:29:40 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a9b7a772ad0733f25",
    "index": 91,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-11-20T11:29:52 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97a82720befca796047",
    "index": 92,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-02-12T08:52:53 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "B"
  },
  {
    "_id": "6162b97ad63087517933be1a",
    "index": 93,
    "resources": 4,
    "department": "F",
    "dueDate": "2022-09-22T11:33:39 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a6163d5453818578b",
    "index": 94,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-10-05T10:11:48 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97aff4c5b9eb2f6219f",
    "index": 95,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-03-05T07:15:11 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97acab53343bec35442",
    "index": 96,
    "resources": 2,
    "department": "C",
    "dueDate": "2022-07-25T09:49:27 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97aa5c7c961ca6d7ae6",
    "index": 97,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-05-10T12:09:25 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane",
    "skillsetRequired": "A"
  },
  {
    "_id": "6162b97ad8af16c2a26d5e11",
    "index": 98,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-05-07T11:51:50 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane",
    "skillsetRequired": "C"
  },
  {
    "_id": "6162b97a5f7497efd277d50a",
    "index": 99,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-10-12T08:26:37 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane",
    "skillsetRequired": "C"
  }
]