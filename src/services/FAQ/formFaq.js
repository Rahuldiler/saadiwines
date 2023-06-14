import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addMilestone = async (faqData) => {
  await http.post({
    url: "/milestone",
    payload: faqData,
    isSecured: true,
  });
};

const getMilestone = async () => {
  const response = await http.get({
    url: "/milestone/me",
    isSecured: true,
  });
  return response.data;
};

export { addMilestone, getMilestone };
