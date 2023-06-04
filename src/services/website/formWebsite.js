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

export { addWebsiteInfo };
