import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addContactUs = async (contactData) => {
  await http.post({
    url: "/contact-us",
    payload: contactData,
    isSecured: true,
  });
};

export { addContactUs };
