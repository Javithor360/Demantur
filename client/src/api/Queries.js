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

export const getMyLoanReqREQ = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-my-loan-request', { headers: PrivateConfig.headers })

}

export const getContactsWPReq = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-contacts-new', { headers: PrivateConfig.headers })
}

export const getSavingAcctsReq = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-saving-accounts', { headers: PrivateConfig.headers })
}

export const UpdatePhotoReq = async (Token, Form) => {
  return await axios.post('http://localhost:4000/api/dashboard/upload-photo', Form, { headers: { 'Content-Type': 'multipart/form-data', "x-auth-token": Token } })
}

export const getNametoNavQuery = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-nav-name', { headers: PrivateConfig.headers })
}

export const getEveryAccQuery = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-every-account', { headers: PrivateConfig.headers })
}


export const ChangeEmailQuery = async (PrivateConfig, Email) => {
  return await axios.put('http://localhost:4000/api/dashboard/change-email', { Email }, { headers: PrivateConfig.headers })
}

export const getAccHistory = async (Token, accNum) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-account-history', { headers: { "Content-Type": "application/json", "x-auth-token": Token, "AccountNumber": accNum } });
}

export const EmailCodeVerQuery = async (PrivateConfig, Code, Email) => {
  return await axios.post('http://localhost:4000/api/dashboard/email-code-verify', { Code, Email }, { headers: PrivateConfig.headers });
}

export const CancelChangeEm = async (PrivateConfig, Code) => {
  return await axios.post('http://localhost:4000/api/dashboard/cancel-change-email', { Code }, { headers: PrivateConfig.headers })
}

export const VerifyOldPassQuery = async (PrivateConfig, OldPass) => {
  return await axios.post('http://localhost:4000/api/dashboard/verify-old-pass', { OldPass }, { headers: PrivateConfig.headers })
}

export const ChangePassQuery = async (PrivateConfig, Password) => {
  return await axios.post('http://localhost:4000/api/dashboard/change-password', { Password }, { headers: PrivateConfig.headers })
}

export const VerifyCodePassQuery = async (PrivateConfig, Code) => {
  return await axios.post('http://localhost:4000/api/dashboard/verify-pass-code', { Code }, { headers: PrivateConfig.headers })
}

export const CancelChangePassQuery = async (PrivateConfig, Code) => {
  return await axios.post('http://localhost:4000/api/dashboard/cancel-change-password', { Code }, { headers: PrivateConfig.headers })
}

export const PendingFrQuery = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-pending-friend-request', { headers: PrivateConfig.headers })
}

export const FriendRequestsQuery = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-friend-request', { headers: PrivateConfig.headers })
}

export const UsersToAddQuery = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/dashboard/get-users-to-add', { headers: PrivateConfig.headers })
}

// ?? QUERYS EMPLOYEE

export const getEmployeeData = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/employee/get-data', { headers: PrivateConfig.headers });
}

export const getCardRequest = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/employee/get-cards-requests', { headers: PrivateConfig.headers })
}

export const getLoanRequests = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/employee/get-loans-requests', { headers: PrivateConfig.headers });
}
export const getPendingAccounts = async (PrivateConfig) => {
  return await axios.get('http://localhost:4000/api/accounts/get-account-requests', { headers: PrivateConfig.headers });

}