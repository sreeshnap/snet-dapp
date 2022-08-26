import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import StyledButton from "../../common/StyledButton";

import { useStyles } from "./styles";
import ExistingModel from "../ExistingModel";
import ProjectDetails from "../ProjectDetails";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const TrainingModels = ({ classes, service }) => {
  return (
    <Grid container spacing={24} className={classes.trainingModelContainer}>
      <Grid item xs={12} sm={12} md={8} lg={8} className={classes.leftSideSection}>
        <div className={classes.requestModelContainer}>
          <h2>Request a new model</h2>
          <div>
            <InfoOutlinedIcon />
            <p>
              The first step in requesting a custom model is to create a project. A project is where you can create and
              manage models. The models you create in this project inherit the name of the project.
            </p>
          </div>
          <StyledButton btnText="request a new model" />
        </div>
        <ExistingModel />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} className={classes.rightSideSection}>
        <ProjectDetails
          projectURL={service.url}
          contributors={service.contributors}
          orgId={service.org_id}
          serviceId={service.service_id}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(TrainingModels);
