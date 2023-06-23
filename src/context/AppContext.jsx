import { useState } from "react";
import { createContext } from "react";
import { staticTemplateData } from "@/constants/template";
import { useRouter } from "next/router";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

  const router = useRouter()

  console.info('--------------------')
  console.info('router----------------------------------', router )
  console.info('--------------------')

  const [selectedTemplate, setSelectedTemplate] = useState({
    id: staticTemplateData[1].id,
    url: staticTemplateData[1].url,
    color: staticTemplateData[1].theme?.bgColor,
    templateId: staticTemplateData[1].templateId,
  });

  console.info('--------------------')
  console.info('selectedTemplate', selectedTemplate )
  console.info('--------------------')

  const context = {
    selectedTemplate, 
    setSelectedTemplate
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
