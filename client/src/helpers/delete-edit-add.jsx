import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const deleteContact = async (id) => {
  try {
    const req = await axios.delete(`http://localhost:5000/api/v1/contacts/${id}`, {
      withCredentials: true
    });
    return req;
  } catch (error) {
    console.error(error);
  }

}
export const editeContact = async (id, data) => {
  try {
    const req = await axios.put(`http://localhost:5000/api/v1/contacts/${id}`, {
      withCredentials: true,
      ...data,
      _id: cookie.get('userId')
    });
    return req;
  } catch (error) {
    console.error(error);
  }
}

export const addContact = async (data) => {
  try {
    const req = await axios.post(`http://localhost:5000/api/v1/contacts`, {
      ...data,
      _id: cookie.get('userId')
    });
    return req;
  } catch (error) {
    console.error(error)
  }
}