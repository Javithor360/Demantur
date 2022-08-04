import axios from "axios";

export const getInfo = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-info", { headers: PrivateConfig.headers });
};

export const creatElements = async (PrivateConfig) => {
  return await axios.post("http://localhost:4000/api/dashboard/test-db-relation", {/* aqui van los datos de la cuenta */ }, { headers: PrivateConfig.headers })
}

export const getContactsQuery = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-contacts", { headers: PrivateConfig.headers })
}

export const getUsersToFRQuery = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-friend-req", { headers: PrivateConfig.headers })
}