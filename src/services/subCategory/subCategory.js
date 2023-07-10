import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addSubcategory = async (payload) => {
  return await http.post({
    url: "/subCategory",
    isSecured: true,
    payload: payload,
  });
};
const editSubcategory = async (id,payload) => {
  return await http.put({
    url: `/subCategory/${id}`,
    isSecured: true,
    payload: payload,
  });
};
const deleteSubCategory = async (id) => {
  return await http.delete({
    url: `/subCategory/${id}`,
    isSecured: true,
  });
};

export { addSubcategory, editSubcategory, deleteSubCategory };
