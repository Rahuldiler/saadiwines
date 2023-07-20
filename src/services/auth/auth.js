import { useState } from "react";
import axios from "axios";
import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();

const login = async (credentials) =>
  http.post({ url: "/login", payload: credentials }).then((resopnse) => {
    localStorage.setItem("jwtToken", resopnse.data.jwtToken);
  });
const signUp = async (userData) => {
  const response = await http.post({ url: "/register", payload: userData });
  localStorage.setItem("jwtToken", response.data.jwtToken);
};

const resetLink = async (credentials) => {
  await http.post({
    url: `/reset-link?userMail=${credentials.userMail}`,
    payload: credentials,
  });
};

const reset = async (credentials) => {
  await http.post({
    url: `/reset`,
    payload: credentials,
  });
};

export { login, signUp, resetLink, reset };
