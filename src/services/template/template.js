import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getTemplateKey = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/getTemplateKey",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTemplateData = async (apiKey) => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: `/getTemplateData/${apiKey}`,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getTemplateKey, getTemplateData };
