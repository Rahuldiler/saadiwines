import React, {useEffect, useMemo, useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import {Grid} from "@mui/material";
import {getWebsiteInfo,} from "@/services/website/formWebsite";
import {getMilestone,} from "@/services/FAQ/formFaq";
import {getContact,} from "@/services/Contact/formContact";
import {useRouter} from "next/router";
import Step1Website from "@/Components/stepper-form/Step1Website";
import Step2Itinerary from "@/Components/stepper-form/Step2Itinerary";
import Step3FAQ from "@/Components/stepper-form/Step3FAQ";
import Step4Contact from "@/Components/stepper-form/Step4Contact";
import {getItinerary,} from "@/services/itinerary/formItinerary";
import Step5Family from "@/Components/stepper-form/Step5Family";
import {getFamilyMember,} from "@/services/familyMember/formFamilyMember";
import {getUserPreference} from "@/services/user-preference/userPreference";
import Notification from "@/Components/common/Notification";
import {getBase64FromUrl} from "@/utils/imageUtil";
import {STEPS} from "@/constants/form/stepper";

function index() {
  const [websiteForm, setWebsiteForm] = useState({
    groom: {name: "", fatherName: "", motherName: "", grandMotherName: "", grandFatherName: "", description: "",},
    bride: {name: "", fatherName: "", motherName: "", grandMotherName: "", grandFatherName: "", description: "",},
    functionDateTime: "",
    thankYouMessage: "",
  });
  const [itineraryLists, setItineraryLists] = useState([
    {arrayId: 1, functionName: "", details: "", address: "", mapsLocation: "", functionDateTime: "", image: ""},
  ]);
  const [milestoneLists, setMilestoneLists] = useState([
    {arrayId: 1, title: "", description: "",},
  ]);
  const [contactDetails, setContactDetails] = useState([
    {arrayId: 1, firstName: "", lastName: "", contactNumber: "", fromSide: "GROOM"},
  ]);

  const [familyMemberLists, setFamilyMemberLists] = useState([
    {arrayId: 1, name: "", relation: ""},
  ]);
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formLoading, setFormLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [notificationActive, setNotificationActive] = useState(false);
  const stepsData = useMemo(() => ({
    0: {
      getData: getWebsiteInfo,
      setData: setWebsiteForm,
      transformData: res => ({...res, functionDateTime: res.functionDateTime + "Z"})
    },
    1: {
      getData: getItinerary,
      setData: setItineraryLists,
      transformData: (res, id) => ({...res, arrayId: id, functionDateTime: res.functionDateTime + "Z"})
    },
    2: {getData: getMilestone, setData: setMilestoneLists, transformData: (res, id) => ({...res, arrayId: id})},
    3: {getData: getContact, setData: setContactDetails, transformData: (res, id) => ({...res, arrayId: id})},
    4: {getData: getFamilyMember, setData: setFamilyMemberLists, transformData: (res, id) => ({...res, arrayId: id})}
  }), []);

  const handleData = async (action, data) => {
    await action(data);
  };
  const handleNext = async (values) => {
    const step = STEPS[activeStep];
    if (!step) return;

    const {filter, updateAction, addAction, getImage} = step;
    const dataPromises = [];
    if (!Array.isArray(values))
      values = [values]
    console.log({isArray: Array.isArray(values), values})
    for (const item of values) {
      let filteredData = Object.keys(item).reduce((data, key) => {
        if (!filter.includes(key)) data[key] = item[key];
        return data;
      }, {});

      let image;
      if (getImage && filteredData.id && item.image) {
        image = await getBase64FromUrl(item.image);
      }
      dataPromises.push(handleData(filteredData.id ? updateAction : addAction, {...filteredData, image}));
    }
    try {
      //TODO start loader here
      await Promise.all(dataPromises);
      setNotificationActive(true);
      activeStep !== 4 ? setActiveStep((prevActiveStep) => prevActiveStep + 1) : await router.push("/choose-template");
    } catch (error) {
      //TODO, show error notification
    } finally {
      // TODO hide loader here
    }
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

  const fetchData = async () => {
    const step = stepsData[activeStep];
    if (!step) return;

    const { getData, setData, transformData } = step;
    const res = await getData();

    if (Array.isArray(res)) {
      let arrayId = 1;
      setData(res.map(item => transformData(item, arrayId++)));
    } else {
      setData(transformData(res));
    }

    setFormLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [activeStep]);

  const notificationMessages = [
    "",
    "Basic Info data has been added",
    "Itinerary data has been added",
    "Milestone data has been added",
    "Contact data has been added",
    "Family data has been added"
  ];

  return (
    <Box>
      {notificationActive && activeStep > 0 && (
        <Notification message={notificationMessages[activeStep]} type="success" />
      )}

      <Grid container sx={{position: "relative"}}>
        <Grid lg={12} item>
          <Box sx={{maxWidth: "1000px", mx: "auto"}}>
            <Box
              sx={{
                m: {lg: "20px 100px", xs: "20px 20px"},
                p: "18px",
                borderBottom: "0.5px solid #BC8129",
                position: "relative",
              }}
            >
              <Stepper activeStep={activeStep}>
                {steps.map((item, index) => (
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
                    <StepLabel>{item.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box>
              {steps[activeStep]?.components}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default index;
