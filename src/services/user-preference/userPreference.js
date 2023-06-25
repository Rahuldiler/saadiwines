import HTTPClientHandler from "@/services/HTTPClientHandler";
import { tr } from "date-fns/locale";

const http = new HTTPClientHandler();

const getUserPreference = async () => {
  const response = await http.get({
    url: "/user_preference/me",
    isSecured: true,
  });

  return response.data;
};

const updateUserPreference = async (data) => {
  try {
    await http.put({
      url: "/user_preference",
      payload: data,
      isSecured: true,
    });
  } catch (error) {}
};

export { getUserPreference, updateUserPreference };
