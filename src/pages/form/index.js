import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import { Grid } from "@mui/material";
import { addWebsiteInfo, getWebsiteInfo } from "@/services/website/formWebsite";
import { addMilestone, getMilestone } from "@/services/FAQ/formFaq";
import { addContact, getContact } from "@/services/Contact/formContact";
import { useRouter } from "next/router";
import Step1Website from "@/Components/StepForm/Step1Website";
import Step2Itinerary from "@/Components/StepForm/Step2Itinerary";
import Step3FAQ from "@/Components/StepForm/Step3FAQ";
import Step4Contact from "@/Components/StepForm/Step4Contact";
import { addItinerary, getItinerary } from "@/services/itinerary/formItinerary";
import Step5Family from "@/Components/StepForm/Step5Family";
import {
  addFamilyMember,
  getFamilyMember,
} from "@/services/familyMember/formFamilyMember";

function index() {
  // const [websiteForm, setWebsiteForm] = useState({
  //   groomName: "",
  //   groom.fatherName: "",
  //   groomMotherName: "",
  //   groomGrandMotherName: "",
  //   groomGrandFatherName: "",
  //   groomDescription: "",
  //   brideName: "",
  //   brideFatherName: "",
  //   brideMotherName: "",
  //   brideGrandMotherName: "",
  //   brideGrandFatherName: "",
  //   brideDescription: "",
  //   dateTime: "",
  //   pics: ["D", "E", "F"],
  //   placesToVisit: ["Dont know", "Don know 2"],
  // });
  const [websiteForm, setWebsiteForm] = useState({
    groom: {
      name: "",
      fatherName: "",
      motherName: "",
      grandMotherName: "",
      grandFatherName: "",
      description: "",
    },
    bride: {
      name: "",
      fatherName: "",
      motherName: "",
      grandMotherName: "",
      grandFatherName: "",
      description: "",
    },
    dateTime: "",
    pics: ["D", "E", "F"],
    placesToVisit: ["Dont know", "Don know 2"],
  });
  const [itineraryLists, setItineraryLists] = useState([
    {
      arrayId: 1,
      functionName: "",
      details: "",
      address: "",
      mapsLocation: "",
      dateTime: "",
    },
  ]);
  const [milestoneLists, setMilestoneLists] = useState([
    {
      arrayId: 1,
      title: "",
      description: "",
    },
  ]);
  const [contactDetails, setContactDetails] = useState([
    {
      arrayId: 1,
      firstName: "",
      lastName: "",
      contactNumber: "",
      fromSide: "GROOM",
    },
  ]);

  const [familyMemberLists, setFamilyMemberLists] = useState([
    {
      arrayId: 1,
      id: 0,
      userId: 0,
      name: "",
      relation: "",
    },
  ]);
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [validationBoolean, setValidationBoolean] = useState(true);
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const steps = [
    {
      label: "Website",
      components: (
        <Step1Website
          websiteForm={websiteForm}
          setWebsiteForm={setWebsiteForm}
          specialChars={specialChars}
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
          specialChars={specialChars}
        />
      ),
    },
    {
      label: "Milestone",
      components: (
        <Step3FAQ
          milestoneLists={milestoneLists}
          setMilestoneLists={setMilestoneLists}
          setValidationBoolean={setValidationBoolean}
          specialChars={specialChars}
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
          specialChars={specialChars}
        />
      ),
    },
    {
      label: "Family",
      components: (
        <Step5Family
          familyMemberLists={familyMemberLists}
          setFamilyMemberLists={setFamilyMemberLists}
          setValidationBoolean={setValidationBoolean}
          specialChars={specialChars}
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
        addItinerary(itineraryLists[i]);
      }
    } else if (activeStep === 2) {
      for (let i = 0; i < milestoneLists.length; i++) {
        addMilestone(milestoneLists[i]);
      }
    } else if (activeStep === 3) {
      for (let i = 0; i < contactDetails.length; i++) {
        addContact(contactDetails[i]);
      }
    } else if (activeStep === 4) {
      for (let i = 0; i < familyMemberLists.length; i++) {
        addFamilyMember(familyMemberLists[i]);
      }
      router.push("/choose-template");
    }
    activeStep !== 4 && setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setValidationBoolean(false);
  };

  const formValidate = () => {
    if (activeStep === 0) {
      if (
        websiteForm.groom.name &&
        websiteForm.groom.fatherName &&
        websiteForm.groom.motherName &&
        websiteForm.groom.grandMotherName &&
        websiteForm.groom.grandFatherName &&
        websiteForm.groom.description &&
        websiteForm.bride.name &&
        websiteForm.bride.fatherName &&
        websiteForm.bride.motherName &&
        websiteForm.bride.grandMotherName &&
        websiteForm.bride.grandFatherName &&
        websiteForm.bride.description &&
        websiteForm.dateTime &&
        websiteForm.thankYouMessage &&
        !websiteForm.groom.name.match(specialChars) &&
        !/\d/.test(websiteForm.groom.name) &&
        !websiteForm.groom.motherName.match(specialChars) &&
        !/\d/.test(websiteForm.groom.motherName) &&
        !websiteForm.groom.fatherName.match(specialChars) &&
        !/\d/.test(websiteForm.groom.fatherName) &&
        !websiteForm.groom.grandMotherName.match(specialChars) &&
        !/\d/.test(websiteForm.groom.grandMotherName) &&
        !websiteForm.groom.grandFatherName.match(specialChars) &&
        !/\d/.test(websiteForm.groom.grandFatherName) &&
        !websiteForm.bride.name.match(specialChars) &&
        !/\d/.test(websiteForm.bride.name) &&
        !websiteForm.bride.motherName.match(specialChars) &&
        !/\d/.test(websiteForm.bride.motherName) &&
        !websiteForm.bride.fatherName.match(specialChars) &&
        !/\d/.test(websiteForm.bride.fatherName) &&
        !websiteForm.bride.grandMotherName.match(specialChars) &&
        !/\d/.test(websiteForm.bride.grandMotherName) &&
        !websiteForm.bride.grandFatherName.match(specialChars) &&
        !/\d/.test(websiteForm.bride.grandFatherName)
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
          !itineraryLists[i].functionName.match(specialChars) && //special character match
          !/\d/.test(itineraryLists[i].functionName) //number test
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

      for (let i = 0; i < milestoneLists.length; i++) {
        if (milestoneLists[i].title && milestoneLists[i].description) {
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
          !contactDetails[i].firstName.match(specialChars) &&
          !/\d/.test(contactDetails[i].firstName) &&
          !contactDetails[i].lastName.match(specialChars) &&
          !/\d/.test(contactDetails[i].lastName)
        ) {
          setValidationBoolean(false);
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
    if (activeStep === 4) {
      let findEmptyField = [];

      for (let i = 0; i < familyMemberLists.length; i++) {
        if (
          familyMemberLists[i].name &&
          familyMemberLists[i].relation &&
          !familyMemberLists[i].name.match(specialChars) &&
          !/\d/.test(familyMemberLists[i].name)
        ) {
          setValidationBoolean(false);
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
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    formValidate();
  }, [
    websiteForm,
    itineraryLists,
    milestoneLists,
    contactDetails,
    familyMemberLists,
    activeStep,
  ]);

  const getWebsiteInfoData = async () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const resWebsite = await getWebsiteInfo();
      resWebsite && setWebsiteForm(resWebsite);

      const resItinerary = await getItinerary();
      let arrayIdItinerary = 1;
      resItinerary.length !== 0 &&
        setItineraryLists(
          resItinerary.map((itinerary) => {
            return {
              ...itinerary,
              arrayId: arrayIdItinerary++,
            };
          })
        );

      const resMilestone = await getMilestone();
      let arrayIdMilestone = 1;
      resMilestone.length !== 0 &&
        setMilestoneLists(
          resMilestone.map((milestone) => {
            return {
              ...milestone,
              arrayId: arrayIdMilestone++,
            };
          })
        );

      const resContact = await getContact();
      let arrayIdContact = 1;
      resContact.length !== 0 &&
        setContactDetails(
          resContact.map((contact) => {
            return {
              ...contact,
              arrayId: arrayIdContact++,
            };
          })
        );

      const resFamily = await getFamilyMember();
      let arrayIdFamily = 1;
      resFamily.length !== 0 &&
        setFamilyMemberLists(
          resFamily.map((family) => {
            return {
              ...family,
              arrayId: arrayIdFamily++,
            };
          })
        );
    }
  };
  useEffect(() => {
    getWebsiteInfoData();
  }, []);
  console.log(familyMemberLists);
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

            <React.Fragment>
              <Box sx={{ mb: 4 }}>
                {steps[activeStep]?.components}
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
          </Box>
        </Grid>
      </Grid>
      {/* <Header /> */}

      {/* <Footer /> */}
    </Box>
  );
}

export default index;
