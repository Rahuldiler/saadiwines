import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addSubcategory = async (payload) => {
  console.log("ADDING SUBCATEGORY");

  return await http.post({
    url: "/subCategory",
    isSecured: true,
    payload: payload,
  });
};
const editSubcategory = async (payload) => {
  console.log("EDITING SUBCATEGORY");
  return await http.put({
    url: `/subCategory/${payload.id}`,
    isSecured: true,
    payload: payload,
  });
};


export { addSubcategory, editSubcategory };
