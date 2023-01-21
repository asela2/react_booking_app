import { BASEURL } from "../constants";
import axios from "axios";

export const register = async (user) =>
  await axios.post(`${BASEURL}/register`, user);

export const login = async (user) => await axios.post(`${BASEURL}/login`, user);
