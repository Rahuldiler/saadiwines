import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { Grid } from "@mui/material";
import {
  addWebsiteInfo,
  getWebsiteInfo,
  updateWebsiteInfo,
} from "@/services/website/formWebsite";
import {
  addMilestone,
  getMilestone,
  updateMilestone,
} from "@/services/FAQ/formFaq";
import {
  addContact,
  getContact,
  updateContact,
} from "@/services/Contact/formContact";
import { useRouter } from "next/router";
import Step1Website from "@/Components/stepper-form/Step1Website";
import Step2Itinerary from "@/Components/stepper-form/Step2Itinerary";
import Step3FAQ from "@/Components/stepper-form/Step3FAQ";
import Step4Contact from "@/Components/stepper-form/Step4Contact";
import {
  addItinerary,
  getItinerary,
  updateItinerary,
} from "@/services/itinerary/formItinerary";
import Step5Family from "@/Components/stepper-form/Step5Family";
import {
  addFamilyMember,
  getFamilyMember,
  updateFamilyMember,
} from "@/services/familyMember/formFamilyMember";
import { getUserPreference } from "@/services/user-preference/userPreference";
import Notification from "@/Components/common/Notification";
import imageToBase64 from "image-to-base64/browser";

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
    functionDateTime: "",
    thankYouMessage: "",
  });
  const [itineraryLists, setItineraryLists] = useState([
    {
      arrayId: 1,
      functionName: "",
      details: "",
      address: "",
      mapsLocation: "",
      functionDateTime: "",
      image: "",
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
      name: "",
      relation: "",
    },
  ]);
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formLoading, setFormLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [notificationActive, setNotificationActive] = useState(false);

  const getBase64FromUrl = async (url) => {
    const imgData = imageToBase64(url) // Path to the image
      .then((response) => {
        return response; // "cGF0aC90by9maWxlLmpwZw=="
      })
      .catch((error) => {
        console.log(error); // Logs an error if there was one
      });
    return imgData;
  };
  const handleNext = async (values) => {
    if (activeStep === 0) {
      const { createdDate, ...weedingInfo } = values;
      try {
        weedingInfo.id
          ? await updateWebsiteInfo(weedingInfo)
          : await addWebsiteInfo(weedingInfo);
        setActiveStep(1);
        setNotificationActive(true);
      } catch (error) {
        return error.message;
      }
    } else if (activeStep === 1) {
      for (let i = 0; i < values.length; i++) {
        const { arrayId, createdDate, image, ...itineraryList } = values[i];
        let urlToImg;
        if (itineraryList.id) {
          urlToImg = image && (await getBase64FromUrl(image));
        }
        console.log("data:image/jpeg;base64," + urlToImg);
        try {
          itineraryList.id
            ? await updateItinerary({
                ...itineraryList,
                image: "data:image/jpeg;base64," + urlToImg,
              })
            : await addItinerary({ ...itineraryList, image });
          setActiveStep(2);
        } catch (error) {
          return error.message;
        }
      }
    } else if (activeStep === 2) {
      for (let i = 0; i < values.length; i++) {
        const { arrayId, createdDate, ...milestoneList } = values[i];
        try {
          milestoneList.id
            ? await updateMilestone(milestoneList)
            : await addMilestone(milestoneList);
          setActiveStep(3);
        } catch (error) {
          return error.message;
        }
      }
    } else if (activeStep === 3) {
      for (let i = 0; i < values.length; i++) {
        const { arrayId, createdDate, image, ...contactDetail } = values[i];

        let urlToImg;
        if (contactDetail.id) {
          urlToImg = image && (await getBase64FromUrl(image));
        }

        try {
          contactDetail.id
            ? await updateContact({ ...contactDetail, image: urlToImg })
            : await addContact({ ...contactDetail, image });
          setActiveStep(4);
        } catch (error) {
          return error.message;
        }
      }
    } else if (activeStep === 4) {
      for (let i = 0; i < values.length; i++) {
        const { arrayId, createdDate, ...familyMemberList } = values[i];
        try {
          familyMemberList.id
            ? await updateFamilyMember(familyMemberList)
            : await addFamilyMember(familyMemberList);
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
      label: "Basic Info",
      components: (
        <Step1Website
          websiteForm={websiteForm}
          setWebsiteForm={setWebsiteForm}
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
          setFormLoading={setFormLoading}
          notificationActive={notificationActive}
          setNotificationActive={setNotificationActive}
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
          setFormLoading={setFormLoading}
          notificationActive={notificationActive}
          setNotificationActive={setNotificationActive}
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
          setFormLoading={setFormLoading}
          notificationActive={notificationActive}
          setNotificationActive={setNotificationActive}
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
          setFormLoading={setFormLoading}
          notificationActive={notificationActive}
          setNotificationActive={setNotificationActive}
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
          setFormLoading={setFormLoading}
          notificationActive={notificationActive}
          setNotificationActive={setNotificationActive}
        />
      ),
    },
  ];

  useEffect(() => {
    getUserPreference();
  }, []);

  let notification;

  //    function convertImageToBase64Async(imagUrl) {
  //     return new Promise(resovle => convertImageToBase64(imgUrl, resolve))
  //  }

  const getWebsiteInfoData = async () => {
    if (activeStep === 0) {
      const resWebsite = await getWebsiteInfo();
      resWebsite &&
        setWebsiteForm({
          ...resWebsite,
          functionDateTime: resWebsite.functionDateTime + "Z",
        });
      setFormLoading(false);
      setLoading(false);
    } else if (activeStep === 1) {
      const resItinerary = await getItinerary();
      let arrayIdItinerary = 1;
      resItinerary.length !== 0 &&
        setItineraryLists(
          resItinerary.map((itinerary) => {
            return {
              ...itinerary,
              arrayId: arrayIdItinerary++,
              functionDateTime: itinerary.functionDateTime + "Z",
            };
          })
        );
      setFormLoading(false);
    } else if (activeStep === 2) {
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
      setFormLoading(false);
    } else if (activeStep === 3) {
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
      setFormLoading(false);
    } else if (activeStep === 4) {
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
      setFormLoading(false);
    }
  };

  useEffect(() => {
    getWebsiteInfoData();
  }, [activeStep]);

  return (
    <Box>
      {notificationActive && activeStep === 1 && (
        <Notification message="Basic Info data has been added" type="success" />
      )}
      {notificationActive && activeStep === 2 && (
        <Notification message="Itinerary data has been added" type="success" />
      )}
      {notificationActive && activeStep === 3 && (
        <Notification message="Milestone data has been added" type="success" />
      )}
      {notificationActive && activeStep === 4 && (
        <Notification message="Contact data has been added" type="success" />
      )}
      {notificationActive && activeStep === 5 && (
        <Notification message="Family data has been added" type="success" />
      )}

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
                  const labelProps = {};
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
            <Box>
              {/* {formLoading && (
                <Loader
                  message="Loading dashboard page"
                  isLoading={formLoading}
                />
              )} */}

              {steps[activeStep]?.components}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default index;
