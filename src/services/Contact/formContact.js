import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addContact = async (contactData) => {
  const token = localStorage.getItem("shaadivines token");
  http.post({
    url: "/contact",
    payload: contactData,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { addContact };
