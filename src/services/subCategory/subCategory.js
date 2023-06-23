import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addSubcategory = async (payload) => {
  return await http.post({
    url: "/subCategory",
    isSecured: true,
    payload: payload,
  });
};
const editSubcategory = async (payload) => {
  console.log("payload")
  console.log(payload)
  return await http.put({
    url: "/subCategory",
    isSecured: true,
    payload: payload,
  });
};
const addTransaction = async (payload) => {
  return http.post({
    url: "/transaction",
    isSecured: true,
    payload: payload,
  });
};

export { addSubcategory, addTransaction, editSubcategory };
