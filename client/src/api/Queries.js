import axios from "axios";

export const getInfo = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-info", { headers: PrivateConfig.headers });
};

export const creatElements = async (PrivateConfig) => {
  return await axios.post("http://localhost:4000/api/dashboard/test-db-relation", {/* aqui van los datos de la cuenta */ }, { headers: PrivateConfig.headers })
}

export const getGlobalInfoQuery = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-contacts", { headers: PrivateConfig.headers })
}

export const getUsersToFRQuery = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-friend-req", { headers: PrivateConfig.headers })
}

export const addFriendReq = async (PrivateConfig, el) => {
  return await axios.post("http://localhost:4000/api/dashboard/add-friend-request", { el }, { headers: PrivateConfig.headers })
}

export const getPedingFrReq = async (PrivateConfig) => {
  return await axios.get("http://localhost:4000/api/dashboard/get-pending-fr", { headers: PrivateConfig.headers })
}

export const cancelFrReq = async (PrivateConfig, el) => {
  return await axios.post("http://localhost:4000/api/dashboard/cancel-friend-request", { el }, { headers: PrivateConfig.headers })
}

export const AcceptFriendReq = async (PrivateConfig, el) => {
  return await axios.post("http://localhost:4000/api/dashboard/accept-friend-request", { el }, { headers: PrivateConfig.headers })
}

export const DeclineFriendReq = async (PrivateConfig, el) => {
  return await axios.post('http://localhost:4000/api/dashboard/decline-friend-request', { el }, { headers: PrivateConfig.headers })
}

export const DeleteFriendRequest = async (PrivateConfig, el) => {
  return await axios.post('http://localhost:4000/api/dashboard/delete-friend-request', { el }, { headers: PrivateConfig.headers })
}

export const DoATransferQuery = async (PrivateConfig, transfer) => {
  return await axios.post('http://localhost:4000/api/dashboard/do-a-transfer', transfer, { headers: PrivateConfig.headers })
}

export const getMyCardReqREQ = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-my-card-request', { headers: PrivateConfig.headers })
}

export const getMyLoanReqREQ = async (PrivateConfig) =>{
  return await axios.get('http://localhost:4000/api/dashboard/get-my-loan-request', { headers: PrivateConfig.headers })
}

export const getContactsWPReq = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-contacts-new', { headers: PrivateConfig.headers })
}

export const getSavingAcctsReq = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-saving-accounts', { headers: PrivateConfig.headers })
}

export const UpdatePhotoReq = async (Token, Form) => {
  console.log(Form);
  return await axios.post('http://localhost:4000/api/dashboard/upload-photo', Form, { headers: { 'Content-Type': 'multipart/form-data', "x-auth-token": Token } })
}

// ?? QUERYS EMPLOYEE

export const getEmployeeData = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/employee/get-data', { headers: PrivateConfig.headers });
}

export const getCardRequest = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/employee/get-cards-requests', { headers: PrivateConfig.headers })
}

export const getLoanRequests = async (PrivateConfig)=>{
  return await axios.get('http://localhost:4000/api/employee/get-loans-requests', { headers: PrivateConfig.headers });
}

