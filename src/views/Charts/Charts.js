/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Language from "@material-ui/icons/Language";
import Warning from "@material-ui/icons/Warning";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Danger from "components/Typography/Danger.js";
import Table from "components/Table/Table.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  colouredLinesChart2,
  pieChart
} from "variables/charts.js";

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

import styles from "assets/jss/material-dashboard-pro-react/views/chartsStyle.js";

const useStyles = makeStyles(styles);

export default function Charts() {
  const classes = useStyles();
  return (
    <div>
      <Heading
        textAlign="center"
        title="Enterprise Online"
        category={
          <span>
            Data Visualisation Panels
          </span>
        }
      />
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart className={classes.cardHover}>
            <CardHeader className={classes.cardHeaderHover}>
              <ChartistGraph
                data={colouredLinesChart.data}
                type="Line"
                options={colouredLinesChart.options}
                listener={colouredLinesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Compound Sentiment Scores across Lessons</h4>
              <p className={classes.cardCategory}>Horizontal axis: Lesson No.<br/>Vertical axis: Sentiment score</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
      <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Skill Metrics Pre and Post Courses
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={multipleBarsChart.data}
                type="Bar"
                options={multipleBarsChart.options}
                listener={multipleBarsChart.animation}
              />
              <p className={classes.cardCategory}>Horizontal axis: Skill Type<br/>Vertical axis: Scores</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning" icon>
              <CardIcon color="warning">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
              Collaborative Engagement Across Lessons
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={colouredLinesChart2.data}
                type="Line"
                options={colouredLinesChart2.options}
                listener={colouredLinesChart2.animation}
              />
              <p className={classes.cardCategory}>Horizontal axis: Totoal Edits<br/>Vertical axis: Lesson No.</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
