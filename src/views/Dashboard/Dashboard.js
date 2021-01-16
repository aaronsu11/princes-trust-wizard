import React from "react";

import { useHistory } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import Select from "react-select";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";
import priceImage4 from "assets/img/clint-mckoy.jpg";
import { ArrowDownward } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const options = [
  { value: "e-online", label: "Enterprise Online" },
  { value: "e-connect", label: "Enterprise Connect" },
  { value: "e-meetup", label: "Enterprise Meetups" },
  { value: "e-accel", label: "Enterprise Pre-Accelerator" },
  { value: "l-1", label: "Lesson 1: How to get startup ideas" },
  { value: "id-11", label: "Alec Thompson" },
];

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody style={{ textAlign: "left" }}>
              <Select
                options={options}
                maxMenuHeight={100}
                isClearable={true}
                placeholder={"Search for programs, lessons or candidates"}
                onChange={(target) => {
                  if (target.value == "e-online") {
                    history.push("/admin/charts");
                  } else if (target.value == "id-11") {
                    history.push("/admin/panels");
                  }
                }}
              />
              {/* <CustomInput
                labelText="Search for programs, lessons or users"
                id="material"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              /> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h3>Programs</h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4} lg={3}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage1} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={() => history.push("/admin/charts")}>
                  Enterprise Online <br />{" "}
                </a>
              </h4>
              {/* <p
                className={classes.cardProductDesciprion}
                style={{ textAlign: "left" }}
              >
                • Building confidence and growth mindset <br />
                • Enterprise skill building <br />• Community connection and
                improved well-being
              </p> */}
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 15%
                  </span>{" "}
                  increase in satisfaction for the last 7 days
                </p>
                <p className={classes.cardCategory}>
                  <DateRange /> Schedule
                  <br />
                  Tuesday 5pm - one on one - USER123 <br /> Wednesday 5pm -
                  group - Induction session for new learners
                </p>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} lg={3}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage2} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Enterprise Connect <br />{" "}
                </a>
              </h4>
              {/* <p
                className={classes.cardProductDesciprion}
                style={{ textAlign: "left" }}
              >
                • Enterprise skill building <br /> • Improved financial
                capability <br /> • Technical skill building and business
                development <br /> • Community connection
              </p> */}
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <p className={classes.cardCategory}>
                  <span className={classes.dangerText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 3%
                  </span>{" "}
                  increase in satisfaction for the last 7 days
                </p>
                <p className={classes.cardCategory}>
                  <DateRange /> Schedule
                  <br />
                  Monday 8am - staff - content changes <br /> Wednesday 3:30pm -
                  group - Sustainable business practices lecture
                </p>
                <p className={classes.cardCategory}>
                  <Danger>
                    <Warning /> Alert
                  </Danger>
                  "One of the hardest things about transitioning is all the
                  fear" - NAME123 <br />
                  "Can we organise a time to meet with you both on zoom?" -
                  LNAME123
                </p>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} lg={3}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage3} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Enterprise Meetups <br />{" "}
                </a>
              </h4>
              {/* <p
                className={classes.cardProductDesciprion}
                style={{ textAlign: "left" }}
              >
                • Community connection and improved well-being <br /> •
                Stronger, more open networks <br /> • Improved technical,
                financial and enterprise skills <br /> • Community connection
              </p> */}
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 9%
                  </span>{" "}
                  increase in satisfaction for the last 7 days
                </p>
                <p className={classes.cardCategory}>
                  <DateRange /> Schedule
                  <br />
                  Thursday 8am - group- Industry networking session <br />{" "}
                  Friday 11am - one on one - meeting with potential industry
                  collaborators
                </p>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} lg={3}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage4} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Enterprise <br /> Pre-Accelerator
                </a>
              </h4>
              {/* <p
                className={classes.cardProductDesciprion}
                style={{ textAlign: "left" }}
              >
                • Community connection and improved well-being <br /> •
                Stronger, more open networks <br /> • Improved technical,
                financial and enterprise skills <br /> • Financial independence
              </p> */}
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 3%
                  </span>{" "}
                  decrease in satisfaction for the last 7 days
                </p>
                <p className={classes.cardCategory}>
                  <DateRange /> Schedule
                  <br />
                  Friday 2pm - one on one - face to face USER345
                </p>
                <p className={classes.cardCategory}>
                  <Danger>
                    <Warning /> Alert
                  </Danger>
                  scary as hell moving into the civilian world out of the safety
                  net & especially going into business - @NAME2HANDLE
                </p>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
