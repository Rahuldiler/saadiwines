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
  console.log("CATEGORY ADDED")
  return await http.post({
    url: "/category",
    isSecured: true,
    payload: payload,
  });
};
const editCategory = async (payload) => {
  console.log("CATEGORY EDITED")
  return await http.put({
    url: `/category/${payload.id}`,
    isSecured: true,
    payload: payload,
  });
};
const deleteCategory = async (id) => {
  console.log("CATEGORY DELETED")
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
