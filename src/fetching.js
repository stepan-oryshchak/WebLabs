import axios from "axios";

export const getProjectorList = (filterCriteria) => {
  return axios.get("/api/projector", { params: filterCriteria });
};

export const getProjectorTypeData = () => {
  return axios.get("/api/projectortypes");
};

export const getDetailedProjectorInfo = (projectId) => {
  return axios.get(`/api/projector/${projectId}`);
};
