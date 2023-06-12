import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getUserPreference = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/user_preference",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateUserPreference = async (data) => {
  const token = localStorage.getItem("shaadivines token");
  http.put({
    url: "/user_preference",
    payload: data,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { getUserPreference, updateUserPreference };
