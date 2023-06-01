import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addFaq = async (faqData) => {
  const token = localStorage.getItem("shaadivines token");
  http.post({
    url: "/faq",
    payload: faqData,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { addFaq };
