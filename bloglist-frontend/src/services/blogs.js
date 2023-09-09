import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const createBlog = async (newObj) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObj, config);
  return response.data;
};

const addLikesFn = async (id, newObj) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObj);
  return request.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

export default { getAll, createBlog, setToken, addLikesFn, deleteBlog };
