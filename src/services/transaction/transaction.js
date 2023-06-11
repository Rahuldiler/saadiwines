import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addTransaction = async (payload) => {
  return http.post({
    url: "/transaction",
    isSecured: true,
    payload: payload,
  });
};

export { addTransaction };
