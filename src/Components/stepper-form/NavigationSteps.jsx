import React from "react";
import { Box, Button } from "@mui/material";

function NavigationSteps({
  activeStep,
  steps,
  handleNext,
  handleBack,
  validationBoolean,
}) {
  return (
    <React.Fragment>
      <Box sx={{ mb: 4, width: "100%" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              gap: 1,
            }}
          >
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className="bg-[#ffe5bd]"
              sx={{
                backgroundColor: "#FBF8F850",
                color: "#BC8129",
                border: 0,
                p: "7px 30px",
                width: "100%",
                "&:hover": {
                  background: "#BC812990",
                },
              }}
            >
              Back
            </Button>
            {/* <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button> */}
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>
      )} */}
            <Button
              type="submit"
              //   disabled={validationBoolean}
              className="bg-[#BC8129]"
              sx={{
                backgroundColor: "#BC8129",
                color: "#fff",
                border: 0,
                p: "7px 30px",
                width: "100%",

                "&:hover": {
                  background: "#BC812990",
                },
                "&:disabled": {
                  background: "#BC812950",
                },
              }}
            >
              {activeStep === 4 ? "Finish" : "Next"}
            </Button>
            {/* <Button onClick={handleNext}>
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button> */}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default NavigationSteps;
