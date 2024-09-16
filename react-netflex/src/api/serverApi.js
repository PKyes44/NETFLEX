import axios from "axios";

const baseURL = 'http://localhost:4000';

const serverClient = axios.create({ baseURL });

export const getHost = async () => {
  const url = '';
  const res = await serverClient.get(url);
  return res.data;
}
