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
    return await http.get({
      url: `/category/${id}`,
      isSecured: true,
    });
  } catch (err) {
    return err;
  }
};
const addCategory = async (payload) => {
  return await http.post({
    url: "/category",
    isSecured: true,
    payload: payload,
  });
};
const editCategory = async (id,payload) => {
  console.log(payload);
  return await http.put({
    url: `/category/${id}`,
    isSecured: true,
    payload: payload,
  });
};
const deleteCategory = async (id) => {
  return await http.delete({
    url: `/category/${id}`,
    isSecured: true,
  });
};

export {
  getCategories,
  getCategoriesById,
  addCategory,
  editCategory,
  deleteCategory,
};
