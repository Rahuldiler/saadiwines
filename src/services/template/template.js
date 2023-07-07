import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getTemplateKey = async () => {
  const response = await http.get({
    url: "/getTemplateKey",
    isSecured: true,
  });
  return response.data;
};

const getTemplateData = async (apiKey) => {
  console.log("apiKey", apiKey);
  const response = await http.get({
    url: `/getTemplateData?apiKey=${apiKey}`,
  });
  return response.data;
};

export { getTemplateKey, getTemplateData };
