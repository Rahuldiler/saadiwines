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
  const response = await http.get({
    url: `/getTemplateData/${apiKey}`,
  });
  return response.data;
};

export { getTemplateKey, getTemplateData };
