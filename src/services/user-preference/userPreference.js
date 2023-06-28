import HTTPClientHandler from "@/services/HTTPClientHandler";
import { tr } from "date-fns/locale";

const http = new HTTPClientHandler();

const getUserPreference = async () => {
  try {
    const response = await http.get({
      url: "/user_preference/me",
      isSecured: true,
    });

    return response.data;
  } catch (error) {
    if (error.request.status === 403) {
      window.location.href = "/";
    }
  }
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
