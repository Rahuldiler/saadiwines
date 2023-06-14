import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addIternary = async (iternaryData) => {
  await http.post({
    url: "/iternary",
    payload: iternaryData,
    isSecured: true,
  });
};

const getIternary = async () => {
  const response = http.get({
    url: "/iternary/me",
    isSecured: true,
  });
  return response.data;
};

export { addIternary, getIternary };
