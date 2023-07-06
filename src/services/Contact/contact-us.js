import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addContactUs = async (contactData) => {
  await http.post({
    url: "/communication/contact",
    payload: contactData,
    isSecured: false,
  });
};

export { addContactUs };
