import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addMilestone = async (faqData) => {
  await http.post({
    url: "/milestone",
    payload: faqData,
    isSecured: true,
  });
};

const updateMilestone = async (faqData) => {
  await http.put({
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

const deleteMilestone = async (id) => {
  await http.delete({
    url: `/milestone/${id}`,
    isSecured: true,
  });
};

export { addMilestone, updateMilestone, getMilestone, deleteMilestone };
