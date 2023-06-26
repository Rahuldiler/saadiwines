import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addItinerary = async (ItineraryData) => {
  await http.post({
    url: "/itinerary",
    payload: ItineraryData,
    isSecured: true,
  });
};

const updateItinerary = async (ItineraryData) => {
  await http.put({
    url: "/itinerary",
    payload: ItineraryData,
    isSecured: true,
  });
};

const getItinerary = async () => {
  const response = await http.get({
    url: "/itinerary/me",
    isSecured: true,
  });
  return response.data;
};

const getItineraryConfig = async () => {
  const response = await http.get({
    url: "/itinerary/config",
    isSecured: true,
  });
  return response.data;
};

export { addItinerary, updateItinerary, getItinerary, getItineraryConfig };
