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

const deleteGuests = async (ids) => {
  const response = await http.delete({
    url: "/guests",
    params: { ids: ids },
    isSecured: true,
  });

  return response.data;
};

const saveGuest = async (requestPayload) => {
  const response = await http.post({
    url: "/guests",
    isSecured: true,
    payload: requestPayload,
  });

  return response.data;
};

const updateGuest = async (id, requestPayload) => {
  const response = await http.put({
    url: "/guests",
    params: { id: id },
    isSecured: true,
    payload: requestPayload,
  });

  return response.data;
};

const updateGuestItinerary = async (params) => {
  const response = await http.put({
    url: "/guests/itinerary",
    params: { ...params },
    isSecured: true,
  });

  return response.data;
};

export {
  getAllGuestsList,
  deleteGuests,
  saveGuest,
  updateGuest,
  updateGuestItinerary,
};
