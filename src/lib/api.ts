import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'employer';
}) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const createJob = async (jobData: any) => {
  const response = await api.post('/jobs', jobData);
  return response.data;
};

export const updateJob = async (id: string, jobData: any) => {
  const response = await api.put(`/jobs/${id}`, jobData);
  return response.data;
};

export const deleteJob = async (id: string) => {
  const response = await api.delete(`/jobs/${id}`);
  return response.data;
};

export const getJobs = async (params?: any) => {
  const response = await api.get('/jobs', { params });
  return response.data;
};

export const getJob = async (id: string) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

export const applyToJob = async (jobId: string, applicationData: any) => {
  const response = await api.post(`/jobs/${jobId}/apply`, applicationData);
  return response.data;
};

export const getApplications = async (params?: any) => {
  const response = await api.get('/applications', { params });
  return response.data;
};

export const updateApplication = async (id: string, status: string) => {
  const response = await api.put(`/applications/${id}`, { status });
  return response.data;
};

export default api; 