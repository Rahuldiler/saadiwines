import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addWebsiteInfo = async (websiteForm) => {
  await http.post({
    url: "/wedding_info",
    payload: websiteForm,
    isSecured: true,
  });
};

const updateWebsiteInfo = async (websiteForm) => {
  await http.put({
    url: "/wedding_info",
    payload: websiteForm,
    isSecured: true,
  });
};

const getWebsiteInfo = async () => {
  const response = await http.get({
    url: "/wedding_info/me",
    isSecured: true,
  });
  return response.data;
};

export { addWebsiteInfo, updateWebsiteInfo, getWebsiteInfo };
