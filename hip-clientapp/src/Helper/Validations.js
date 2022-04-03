export const validateEmail = (value) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return value.match(emailRegex);
};

export const validateText = (value) => {
  const textRegex = /^[a-zA-Z ]*[^0-9]{3,30}$/gm;
  return value.match(textRegex);
};

export const mobileNumber = (value) => {
  const regex = /[0-9]*$/;
  return value.match(regex);
};

export const validateUserName = (value) => {
  const regex = /[0-9a-zA-Z@!$&]*$/;
  return value.match(regex);
};
