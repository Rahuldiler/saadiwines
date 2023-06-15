import HTTPClientHandler from "@/services/HTTPClientHandler";
import { ca } from "date-fns/locale";

const http = new HTTPClientHandler();

const getUser = async () => {
  try {
    const response = await http.get({
      url: "/user",
      isSecured: true,
    });
    return response.data;
  } catch (error) {
    window.location.href = "/";
  }
};

export { getUser };
