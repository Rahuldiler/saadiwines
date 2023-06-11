import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addContact = async (contactData) => {
  const token = localStorage.getItem("shaadivines token");
  http.post({
    url: "/poc",
    payload: contactData,
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getContact = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/poc/me",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    });
};

export { addContact, getContact };
