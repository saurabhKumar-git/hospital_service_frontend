var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const signup = async (data) => {
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };
  return await fetch(
    `${process.env.REACT_APP_BASE_URL}/huser/create-user/`,
    requestOptions
  ).then((response) => response.json());
};

export const updatePassword = async (data) => {
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };
  return await fetch(
    `${process.env.REACT_APP_BASE_URL}/huser/update-password/`,
    requestOptions
  ).then((response) => response.json());
};

export const loginUser = async (data) => {
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };
  return await fetch(
    `${process.env.REACT_APP_BASE_URL}/huser/token/`,
    requestOptions
  ).then((response) => response.json());
};
