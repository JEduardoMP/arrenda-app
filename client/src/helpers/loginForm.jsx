import axios from "axios";

export const loginForm = async (toSend) => {
  try {
    const req = await axios.post("http://localhost:5000/api/v1/user", toSend);
    return req;
  } catch (error) {
    console.error(error);
  }
};
