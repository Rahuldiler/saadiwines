import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getAllGuestsList = async (requestPayload) => {
  const response = await http.post({
    url: "/guests/me",
    isSecured: true,
    payload: requestPayload,
  });

  return response.data;
};

export { getAllGuestsList };
