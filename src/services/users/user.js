import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getUser = async () => {
  const token = localStorage.getItem("shaadivines token");
  return http
    .get({
      url: "/user",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      window.location.href = "/";
    });
};

export { getUser };
