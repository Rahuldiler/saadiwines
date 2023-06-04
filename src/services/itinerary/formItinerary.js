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

export { addIternary };
