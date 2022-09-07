import React from "react";
import { withStyles } from "@material-ui/styles";
import ModelDetails from "./ModelDetails";
import StyledButton from "../../common/StyledButton";
import { useStyles } from "./styles";

const ExistingModel = ({ classes,training }) => {
let haveANewModel = (((training.training_methods === undefined)||((training.training_methods).length === 0)) ? false : true);
  return (
    <div className={classes.existingModelContainer}>
      <h2>Existing Model</h2>
      <ModelDetails
        title="Region Recognition"
        id="4432"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
				status="Inprogress"
				accessTo="Public"
				lastUpdate="12-Aug-2022"
      />
			<div className={classes.btnContainer}>
      {(haveANewModel === true)? <StyledButton btnText="request a new model" />: null }
			</div>
    </div>
  );
};

export default withStyles(useStyles)(ExistingModel);
