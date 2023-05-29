import {useState} from 'react';
import axios from 'axios';
import HTTPClientHandler from "@/services/HTTPClientHandler";

const http = new HTTPClientHandler();


const login = async (credentials) => http.post({url: "/login", payload: credentials});

const signUp = async (userData) => http.post({url: "/register", payload: userData});

export {login, signUp};
