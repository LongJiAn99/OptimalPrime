import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
//import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
//import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Dept from "variables/Dept.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import EmployeeListData from "components/Data/EmployeeListData";

const useStyles = makeStyles(styles);


//import DataTask from "components/Data/functions.js";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="warning">
                <Icon>A</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Department A</p>
              <h3 className={classes.cardTitle}>9%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
            <CardIcon color="info">
                <Icon>B</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Department B</p>
              <h3 className={classes.cardTitle}>20%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="danger">
                <Icon>C</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Department C</p>
              <h3 className={classes.cardTitle}>11%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Update />
                
                Just updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>D</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Department D</p>
              <h3 className={classes.cardTitle}>20%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="success">
              <Icon>E</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Department E</p>
              <h3 className={classes.cardTitle}>10%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="success">
              <Icon>F</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Department F</p>
              <h3 className={classes.cardTitle}>15%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Dept A",
                tabContent: (
                  <Dept deptString = "A"/>
                  
                ),
              },
              {
                tabName: "Dept B",
                tabContent: (
                  <Dept deptString = "B"/>
                ),
              },
              {
                tabName: "Dept C",
                tabContent: (
                  <Dept deptString = "C"/>
                ),
              },
              {
                tabName: "Dept D",
                tabContent: (
                  <Dept deptString = "D"/>
                ),
              },
              {
                tabName: "Dept E",
                tabContent: (
                  <Dept deptString = "E"/>
                ),
              },
              {
                tabName: "Dept F",
                tabContent: (
                  <Dept deptString = "F"/>
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
            </CardHeader>
            <CardBody>
            <EmployeeListData filtered = {true} />
{/*               <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Department", "Skill Set", "Available"]}
                tableData={[
                  ["1", "Dakota Rice", "C", "C", "No"],
                ]}
              /> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
