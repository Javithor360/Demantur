import axios from "axios";


const PrivateConfig = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem('authToken'),
  },
};




export const getInfo = async () => {
  console.log(PrivateConfig);
  return await axios.get("http://localhost:4000/api/dashboard/get-info", PrivateConfig);
};

export const getContacts = async () => {
  return await axios.get('http://localhost:4000/api/dashboard/', PrivateConfig)
}

