import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addMilestone = async (faqData) => {
  const token = localStorage.getItem("shaadivines token");
  http.post({
    url: "/milestone",
    payload: faqData,
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getMilestone = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/milestone/me",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    });
};

export { addMilestone, getMilestone };
