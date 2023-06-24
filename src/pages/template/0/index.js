import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";
import GreenStrip from "@/Components/template-components/1/greenStrip";
import CoupleInfo from "@/Components/template-components/1/coupleInfoBox";
import Double from "@/Components/template-components/1/double";
import ContactForm from "@/Components/template-components/1/rsvpForm";
import Lightbox from "@/Components/template-components/1/lightBox";
import Cards from "@/Components/template-components/1/Cards";
import { useEffect } from "react";
import { templateInfoData } from "@/constants/templateInfo";
import Steps from "@/Components/template-components/1/steps";
import { useRouter } from "next/router";
import TemplateOne from "@/Components/all-templates/TemplateOne";
import { staticTemplateData } from "@/constants/template";

function Template1({ formData }) {
  // useEffect(() => {
  //   if (router?.query?.color !== undefined) {
  //     setThemeColor(`#${router?.query?.color}`);
  //   }
  // }, [router.query]);

  useEffect(() => {
    formData ? setTemplateData(formData) : setTemplateData(templateInfoData);
  }, [formData]);

  return (
    <TemplateOne
      formData={formData}
      staticTemplateData={staticTemplateData[0]}
    />
  );
}

export default Template1;
