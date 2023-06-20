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
import Step1Website from "@/Components/stepper-form/Step1Website";
import Step2Itinerary from "@/Components/stepper-form/Step2Itinerary";
import Step3FAQ from "@/Components/stepper-form/Step3FAQ";
import Step4Contact from "@/Components/stepper-form/Step4Contact";
import { addItinerary, getItinerary } from "@/services/itinerary/formItinerary";
import Step5Family from "@/Components/stepper-form/Step5Family";
import {
  addFamilyMember,
  getFamilyMember,
} from "@/services/familyMember/formFamilyMember";

function index() {
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
    thankYouMessage: "",
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
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = async (values) => {
    if (activeStep === 0) {
      try {
        await addWebsiteInfo(values);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } catch (error) {
        return error.message;
      }
    } else if (activeStep === 1) {
      for (let i = 0; i < values.length; i++) {
        const { arrayId, ...value } = values[i];
        try {
          await addItinerary(value);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } catch (error) {
          return error.message;
        }
      }
    } else if (activeStep === 2) {
      for (let i = 0; i < milestoneLists.length; i++) {
        const { arrayId, ...milestoneList } = milestoneLists[i];
        try {
          await addMilestone(milestoneList);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } catch (error) {
          return error.message;
        }
      }
    } else if (activeStep === 3) {
      for (let i = 0; i < contactDetails.length; i++) {
        const { arrayId, ...contactDetail } = contactDetails[i];
        try {
          await addContact(contactDetail);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } catch (error) {
          return error.message;
        }
      }
    } else if (activeStep === 4) {
      for (let i = 0; i < familyMemberLists.length; i++) {
        const { arrayId, ...familyMemberList } = familyMemberLists[i];
        try {
          await addFamilyMember(familyMemberList);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } catch (error) {
          return error.message;
        }
      }
      router.push("/choose-template");
    }
    // activeStep !== 4 && setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: "Website",
      components: (
        <Step1Website
          websiteForm={websiteForm}
          setWebsiteForm={setWebsiteForm}
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      ),
    },
    {
      label: "Itinerary",
      components: (
        <Step2Itinerary
          itineraryLists={itineraryLists}
          setItineraryLists={setItineraryLists}
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      ),
    },
    {
      label: "Milestone",
      components: (
        <Step3FAQ
          milestoneLists={milestoneLists}
          setMilestoneLists={setMilestoneLists}
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      ),
    },
    {
      label: "Contact",
      components: (
        <Step4Contact
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      ),
    },
    {
      label: "Family",
      components: (
        <Step5Family
          familyMemberLists={familyMemberLists}
          setFamilyMemberLists={setFamilyMemberLists}
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      ),
    },
  ];
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      router.push("/");
    }
  }, []);

  const getWebsiteInfoData = async () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      if (activeStep === 0) {
        const resWebsite = await getWebsiteInfo();
        resWebsite && setWebsiteForm(resWebsite);
      }
      if (activeStep === 1) {
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
      }
      if (activeStep === 2) {
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
      }

      if (activeStep === 3) {
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
      }

      if (activeStep === 4) {
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
    }
  };
  useEffect(() => {
    getWebsiteInfoData();
  }, [activeStep]);
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
            <Box>{steps[activeStep]?.components}</Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Header /> */}

      {/* <Footer /> */}
    </Box>
  );
}

export default index;
