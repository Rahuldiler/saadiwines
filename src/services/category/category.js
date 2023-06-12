import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const getCategories = async () => {
  try {
    return await http.get({
      url: "category/me",
      isSecured: true,
    });
  } catch (err) {
    return err;
  }
};
const getCategoriesById = async (id) => {
  try {
    return http.get({
      url: `/category/${id}`,
      isSecured: true,
    });
  } catch (err) {
    return err;
  }
};
const addCategory = async (payload) => {
  return http.post({
    url: "/category",
    isSecured: true,
    payload: payload,
  });
};
const editCategory = async (payload) => {
  return http.put({
    url: "/category",
    isSecured: true,
    payload: payload,
  });
};

export { getCategories, getCategoriesById, addCategory, editCategory };
