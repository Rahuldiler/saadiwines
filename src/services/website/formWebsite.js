import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addWebsiteInfo = async (websiteForm) => {
  const token = localStorage.getItem("shaadivines token");
  http.post({
    url: "/wedding_info",
    payload: websiteForm,
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getWebsiteInfo = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/wedding_info/me",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    });
};

export { addWebsiteInfo, getWebsiteInfo };
