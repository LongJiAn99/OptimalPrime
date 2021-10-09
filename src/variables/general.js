//import TaskData from "components/Data/Tasks.json";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
//import TableCell from "@material-ui/core/TableCell";

import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

const Dept = (props) => {
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
              </TableRow>
            </TableHead>
            <TableBody >
      
      {test.filter(t => t.department === props.deptString).sort((a, b) => b.dueDate - a.dueDate).map(t => (
      <TableRow key={t.department} className={classes.tableBodyRow}>
                <td>{t.resources}</td>
                <td>{t.criticality}</td>
                <td>{t.equipment}</td>
                <td>{t.dueDate.substring(0,10) + " " + t.dueDate.substring(11,16)}</td>
          </TableRow>
          ))}         
            </TableBody>
        </Table>
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
};



const test = 
[
  {
    "_id": "616027c31252a5b50d50f2ea",
    "index": 0,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-08-01T07:20:10 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c35bdfe269acd84047",
    "index": 1,
    "resources": 3,
    "department": "B",
    "dueDate": "2022-08-22T01:35:03 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c327795fe62aefe1fb",
    "index": 2,
    "resources": 2,
    "department": "E",
    "dueDate": "2022-09-26T10:44:46 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c38fb18a44abfd7166",
    "index": 3,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-09-28T01:31:21 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c369ca501ffaab2737",
    "index": 4,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-11-03T05:59:43 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c3c6d3d8739b7f22a2",
    "index": 5,
    "resources": 3,
    "department": "A",
    "dueDate": "2022-10-26T05:09:10 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c301eeb0fc02061bd7",
    "index": 6,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-05-12T09:25:00 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c32ea761384ec3af14",
    "index": 7,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-11-15T03:37:29 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3639c146970dd677f",
    "index": 8,
    "resources": 2,
    "department": "E",
    "dueDate": "2022-11-27T01:38:54 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3ea8caf90738ab7d5",
    "index": 9,
    "resources": 4,
    "department": "B",
    "dueDate": "2023-01-11T09:21:12 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c325477a25dd65b89e",
    "index": 10,
    "resources": 3,
    "department": "F",
    "dueDate": "2022-03-14T03:56:46 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c353bcdad9a321b7ab",
    "index": 11,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-02-18T12:50:15 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3b35c2229afc4348c",
    "index": 12,
    "resources": 2,
    "department": "C",
    "dueDate": "2022-02-23T06:58:59 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c316f112f0ce6b763e",
    "index": 13,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-03-27T04:32:52 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c34da0318ec8396734",
    "index": 14,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-05-10T05:58:38 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3b032a0aed78564eb",
    "index": 15,
    "resources": 4,
    "department": "F",
    "dueDate": "2021-12-11T03:55:14 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c389560cd5d8585a77",
    "index": 16,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-09-04T03:46:24 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3b2faced76e55bc00",
    "index": 17,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-06-04T06:39:09 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3fe1bfb5f812e546e",
    "index": 18,
    "resources": 4,
    "department": "E",
    "dueDate": "2022-05-01T05:22:53 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c33de5f26680ea1d34",
    "index": 19,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-11-19T02:17:40 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3a7e57e545334022a",
    "index": 20,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-01-11T02:12:05 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3d77cb9eab8e32312",
    "index": 21,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-03-11T02:44:31 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c32c2dd23520252e97",
    "index": 22,
    "resources": 2,
    "department": "D",
    "dueDate": "2022-01-01T09:54:41 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c32ab0fb29a19e5cb4",
    "index": 23,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-07-11T02:35:05 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c319ff07ced9deb06b",
    "index": 24,
    "resources": 2,
    "department": "A",
    "dueDate": "2022-03-13T02:27:05 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c307218b88c3015eca",
    "index": 25,
    "resources": 3,
    "department": "E",
    "dueDate": "2023-01-26T02:58:31 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3e560323b4e03a11c",
    "index": 26,
    "resources": 3,
    "department": "F",
    "dueDate": "2023-01-03T12:32:58 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c39725071e682c26c3",
    "index": 27,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-09-10T11:32:16 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3512e1c14dcde70ca",
    "index": 28,
    "resources": 3,
    "department": "F",
    "dueDate": "2022-03-10T08:41:43 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c305ba28212a9310c1",
    "index": 29,
    "resources": 4,
    "department": "D",
    "dueDate": "2022-01-06T06:05:01 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c39fd2ce42a522a68f",
    "index": 30,
    "resources": 3,
    "department": "F",
    "dueDate": "2022-08-14T03:53:39 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c3f1b4c0ac1cdfeea6",
    "index": 31,
    "resources": 4,
    "department": "B",
    "dueDate": "2022-08-21T02:56:29 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3a6ea1548a206ceca",
    "index": 32,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-09-21T09:54:15 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c35cb265ece7b9d1df",
    "index": 33,
    "resources": 3,
    "department": "B",
    "dueDate": "2022-12-31T02:51:08 -08:00",
    "criticality": "Medium",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c305d0ed6f5c7e35d5",
    "index": 34,
    "resources": 3,
    "department": "C",
    "dueDate": "2022-07-27T09:53:56 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c386f98e7efe02d2a8",
    "index": 35,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-09-28T03:24:30 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c3bb4a82d609987ac3",
    "index": 36,
    "resources": 2,
    "department": "F",
    "dueDate": "2022-11-07T05:40:11 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c377ff95553211d17a",
    "index": 37,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-11-09T12:26:53 -08:00",
    "criticality": "High",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c39404b1fd7312d3d7",
    "index": 38,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-03-11T01:00:03 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3593dd1d77a41fc18",
    "index": 39,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-01-02T07:27:47 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3259a09e487b059ba",
    "index": 40,
    "resources": 3,
    "department": "B",
    "dueDate": "2022-01-09T08:16:21 -08:00",
    "criticality": "Low",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3f9015b13ed1676f7",
    "index": 41,
    "resources": 4,
    "department": "F",
    "dueDate": "2022-03-19T10:56:27 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c311c11250d621ecfb",
    "index": 42,
    "resources": 4,
    "department": "A",
    "dueDate": "2022-10-26T10:51:12 -08:00",
    "criticality": "Medium",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c34ae7f8e37d000371",
    "index": 43,
    "resources": 2,
    "department": "B",
    "dueDate": "2022-09-22T12:55:48 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  },
  {
    "_id": "616027c3c1dcb0e6d5ba5167",
    "index": 44,
    "resources": 4,
    "department": "C",
    "dueDate": "2022-01-18T03:17:08 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3bb9bb7d62dc68cb8",
    "index": 45,
    "resources": 2,
    "department": "E",
    "dueDate": "2022-11-24T05:28:08 -08:00",
    "criticality": "Medium",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3643333cf1d2027fd",
    "index": 46,
    "resources": 3,
    "department": "E",
    "dueDate": "2022-11-29T07:30:55 -08:00",
    "criticality": "Low",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c3bb8ac6ee5011e2ac",
    "index": 47,
    "resources": 3,
    "department": "D",
    "dueDate": "2022-01-06T12:48:57 -08:00",
    "criticality": "High",
    "equipment": "Prime Mover"
  },
  {
    "_id": "616027c372db7ff5b93df855",
    "index": 48,
    "resources": 4,
    "department": "B",
    "dueDate": "2022-10-12T04:42:44 -08:00",
    "criticality": "High",
    "equipment": "Yard Crane"
  },
  {
    "_id": "616027c3c82e5f77875cd577",
    "index": 49,
    "resources": 3,
    "department": "A",
    "dueDate": "2022-12-01T11:47:29 -08:00",
    "criticality": "Low",
    "equipment": "Quay Crane"
  }
]


