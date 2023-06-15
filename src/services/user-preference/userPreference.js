import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getUserPreference = async () => {
  const response = await http.get({
    url: "/user_preference/me",
    isSecured: true,
  });

  return response.data;
};

const updateUserPreference = async (data) => {
  await http.put({
    url: "/user_preference",
    payload: data,
    isSecured: true,
  });
};

export { getUserPreference, updateUserPreference };
