import axios from "axios";

//post method
export const post = (url, data) => {
  axios.post({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};
