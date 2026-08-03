import axios from "axios";

const API = "http://localhost:5000/api/applications";

// GET all applications
export const getApplications = () => {
  return axios.get(API);
};

// CREATE application
export const createApplication = (applicationData) => {
  return axios.post(API, applicationData);
};

// UPDATE application
export const updateApplication = (id, applicationData) => {
  return axios.put(`${API}/${id}`, applicationData);
};

// DELETE application
export const deleteApplication = (id) => {
  return axios.delete(`${API}/${id}`);
};
