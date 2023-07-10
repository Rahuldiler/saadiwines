import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addTransaction = async (payload) => {
  return http.post({
    url: "/transaction",
    isSecured: true,
    payload: payload,
  });
};
const editTransaction = async (id, payload) => {
  console.log(payload);
  return http.put({
    url: `/transaction/${id}`,
    isSecured: true,
    payload: payload,
  });
};
const deleteTransaction = async (id) => {
  return http.delete({
    url: `/transaction/${id}`,
    isSecured: true,
    // payload: payload,
  });
};

const fetchAllTransactions = async () => {
  return http.get({
    url: `/transaction/me`,
    isSecured: true,
  });
};

export {
  addTransaction,
  deleteTransaction,
  fetchAllTransactions,
  editTransaction,
};
