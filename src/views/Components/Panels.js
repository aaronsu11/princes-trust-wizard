import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import Money from "@material-ui/icons/Money";
import HelpOutline from "@material-ui/icons/HelpOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center",
  },
  cardCategory: {
    margin: "0",
    color: "#999999",
  },
};

const useStyles = makeStyles(styles);

export default function Panels() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>USERID: NameSU01</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Exploring small business and/or entrepreneurship, Looking for a
                full-time job within a business, Professional development (e.g.
                building confidence, skills, networks and/or workforce
                readiness), Pursuing further education and/or study
              </p>
              <Button color="rose" round>
                Flag
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          {/* <h3 className={classes.pageSubcategoriesTitle}>Demographics</h3> */}
          <br />
          <NavPills
            color="rose"
            alignCenter
            tabs={[
              {
                tabButton: "Description",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      - Male
                      <br />
                      - Service: Airforce
                      <br />
                      - Year of Service: 8<br />
                      - Birthdate: 9/30/1994
                      <br />
                      - Start time: 5/11/20 17:13:17
                      <br />- Current Program: Enterprise Connect (Business
                      Readiness Check)
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Location",
                tabIcon: LocationOn,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Location of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Financial Info",
                tabIcon: Money,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Legal info of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Requests",
                tabIcon: HelpOutline,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>Help center</h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      From the seamless transition of glass and metal to the
                      streamlined profile, every detail was carefully considered
                      to enhance your experience. So while its display is
                      larger, the phone feels just right.
                      <br />
                      <br />
                      Another Text. The first thing you notice when you hold the
                      phone is how great it feels in your hand. The cover glass
                      curves down around the sides to meet the anodized aluminum
                      enclosure in a remarkable, simplified design.
                    </CardBody>
                  </Card>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
