import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addContact = async (contactData) => {
  await http.post({
    url: "/poc",
    payload: contactData,
    isSecured: true,
  });
};

const updateContact = async (contactData) => {
  await http.put({
    url: "/poc",
    payload: contactData,
    isSecured: true,
  });
};

const getContact = async () => {
  const response = await http.get({
    url: "/poc/me",
    isSecured: true,
  });
  return response.data;
};

const deleteContact = async (id) => {
  await http.delete({
    url: `/poc/${id}`,
    isSecured: true,
  });
};

export { addContact, updateContact, getContact, deleteContact };
