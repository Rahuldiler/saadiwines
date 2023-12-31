import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const addFamilyMember = async (familyMemberData) => {
  await http.post({
    url: "/family_member",
    payload: familyMemberData,
    isSecured: true,
  });
};

const updateFamilyMember = async (familyMemberData) => {
  await http.put({
    url: "/family_member",
    payload: familyMemberData,
    isSecured: true,
  });
};

const getFamilyMember = async () => {
  const response = await http.get({
    url: "/family_member/me",
    isSecured: true,
  });
  return response.data;
};

const deleteFamilyMember = async (id) => {
  await http.delete({
    url: `/family_member/${id}`,
    isSecured: true,
  });
};

export {
  addFamilyMember,
  updateFamilyMember,
  getFamilyMember,
  deleteFamilyMember,
};
