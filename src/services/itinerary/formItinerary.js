import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addIternary = async (iternaryData) => {
  const token = localStorage.getItem("shaadivines token");
  http.post({
    url: "/iternary",
    payload: iternaryData,
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getIternary = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/iternary/me",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    });
};

export { addIternary, getIternary };
