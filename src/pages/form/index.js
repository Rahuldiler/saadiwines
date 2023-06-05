import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step1Website from "@/Components/StepForm/Step1Website";
import Step2Itinerary from "@/Components/StepForm/Step2Itinerary";
import Step3FAQ from "@/Components/StepForm/Step3FAQ";
import Step4Contact from "@/Components/StepForm/Step4Contact";
import Header from "@/Components/Common/Header";
import Footer from "@/Components/Common/Footer";
import axios from "axios";

import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { addWebsiteInfo } from "@/services/website/formWebsite";
import { addIternary } from "@/services/itinerary/formItinerary";
import { addFaq } from "@/services/FAQ/formFaq";
import { addContact } from "@/services/Contact/formContact";

function index() {
  const [websiteForm, setWebsiteForm] = useState({
    groom: "",
    bride: "",
    dateTime: "",
  });
  const [itineraryLists, setItineraryLists] = useState([
    {
      id: 1,
      functionName: "",
      details: "",
      address: "",
      mapsLocation: "",
      dateTime: "",
    },
  ]);
  const [faqLists, setFaqLists] = useState([
    {
      id: 1,
      question: "",
      answer: "",
    },
  ]);
  const [contactDetails, setContactDetails] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      contactNumber: Number,
      fromSide: "GROOM",
    },
  ]);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [validationBoolean, setValidationBoolean] = useState(true);

  const steps = [
    {
      label: "Website",
      components: (
        <Step1Website
          websiteForm={websiteForm}
          setWebsiteForm={setWebsiteForm}
        />
      ),
    },
    {
      label: "Itinerary",
      components: (
        <Step2Itinerary
          itineraryLists={itineraryLists}
          setItineraryLists={setItineraryLists}
          setValidationBoolean={setValidationBoolean}
        />
      ),
    },
    {
      label: "FAQ",
      components: (
        <Step3FAQ
          faqLists={faqLists}
          setFaqLists={setFaqLists}
          setValidationBoolean={setValidationBoolean}
        />
      ),
    },
    {
      label: "Contact",
      components: (
        <Step4Contact
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          setValidationBoolean={setValidationBoolean}
        />
      ),
    },
  ];

  const handleNext = () => {
    setValidationBoolean(true);

    if (activeStep === 0) {
      addWebsiteInfo(websiteForm);
    } else if (activeStep === 1) {
      for (let i = 0; i < itineraryLists.length; i++) {
        addIternary(itineraryLists[i]);
      }
    } else if (activeStep === 2) {
      for (let i = 0; i < faqLists.length; i++) {
        addFaq(faqLists[i]);
      }
    } else if (activeStep === 3) {
      for (let i = 0; i < contactDetails.length; i++) {
        addContact(contactDetails[i]);
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setValidationBoolean(false);
  };

  const formValidate = () => {
    if (activeStep === 0) {
      if (
        websiteForm.groom &&
        websiteForm.bride &&
        websiteForm.dateTime &&
        !websiteForm.groom.match(/\W/) &&
        !/\d/.test(websiteForm.groom) &&
        !websiteForm.bride.match(/\W/) &&
        !/\d/.test(websiteForm.bride)
      ) {
        setValidationBoolean(false);
      } else {
        setValidationBoolean(true);
      }
    }
    if (activeStep === 1) {
      let findEmptyField = [];
      for (let i = 0; i < itineraryLists.length; i++) {
        if (
          itineraryLists[i].functionName &&
          itineraryLists[i].details &&
          itineraryLists[i].address &&
          itineraryLists[i].mapsLocation &&
          itineraryLists[i].dateTime &&
          !itineraryLists[i].functionName.match(/\W/) &&
          !/\d/.test(itineraryLists[i].functionName)
        ) {
          findEmptyField.push(false);
        } else {
          findEmptyField.push(true);
        }
      }
      if (findEmptyField.includes(true)) {
        setValidationBoolean(true);
      } else {
        setValidationBoolean(false);
      }
    }

    if (activeStep === 2) {
      let findEmptyField = [];

      for (let i = 0; i < faqLists.length; i++) {
        if (faqLists[i].question && faqLists[i].answer) {
          findEmptyField.push(false);
        } else {
          findEmptyField.push(true);
        }
        if (findEmptyField.includes(true)) {
          setValidationBoolean(true);
        } else {
          setValidationBoolean(false);
        }
      }
    }
    if (activeStep === 3) {
      let findEmptyField = [];

      for (let i = 0; i < contactDetails.length; i++) {
        if (
          contactDetails[i].firstName &&
          contactDetails[i].lastName &&
          contactDetails[i].contactNumber &&
          !contactDetails[i].firstName.match(/\W/) &&
          !/\d/.test(contactDetails[i].firstName) &&
          !contactDetails[i].lastName.match(/\W/) &&
          !/\d/.test(contactDetails[i].lastName)
        ) {
          setValidationBoolean(true);
        } else {
          findEmptyField.push(true);
        }
        if (findEmptyField.includes(true)) {
          setValidationBoolean(true);
        } else {
          setValidationBoolean(false);
        }
      }
    }
  };

  useEffect(() => {
    formValidate();
  }, [websiteForm, itineraryLists, faqLists, contactDetails]);

  return (
    <Box>
      <Grid container sx={{ position: "relative" }}>
        <Grid lg={12} item>
          <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
            <Box
              sx={{
                m: { lg: "20px 100px", xs: "20px 20px" },
                p: "18px",
                borderBottom: "0.5px solid #BC8129",
                position: "relative",
              }}
            >
              <Stepper activeStep={activeStep}>
                {steps.map((item, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  //   if (isStepOptional(index)) {
                  //     labelProps.optional = (
                  //       <Typography variant="caption">Optional</Typography>
                  //     );
                  //   }

                  return (
                    <Step
                      key={index}
                      sx={{
                        "& .MuiStepIcon-root.Mui-active": {
                          color: "#BC8129",
                        },
                        "& .MuiStepIcon-root.Mui-completed": {
                          color: "#BC8129",
                        },
                      }}
                    >
                      <StepLabel {...labelProps}>{item.label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            {activeStep === steps.length ? (
              <Box
                sx={{
                  m: { lg: "80px 100px", xs: "60px 20px" },
                  p: "18px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src="/assets/thanks.png"
                    width={100}
                    height={100}
                    alt="thanks"
                  />
                </Box>

                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Link href="/choose-template">
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#BC8129",
                      fontWeight: 500,
                    }}
                  >
                    Check Templates
                  </Typography>
                </Link>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                </Box>
              </Box>
            ) : (
              <React.Fragment>
                <Box sx={{ mb: 4 }}>
                  {steps[activeStep].components}
                  <Box sx={{ m: { lg: "0px 200px", xs: "60px 20px" } }}>
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
                        onClick={handleNext}
                        disabled={validationBoolean}
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
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                      {/* <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button> */}
                    </Box>
                  </Box>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
      {/* <Header /> */}

      {/* <Footer /> */}
    </Box>
  );
}

export default index;
