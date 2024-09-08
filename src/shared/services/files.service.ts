import apiInstance from "./api-instance";
import { ApiRoutes } from "./api-routes";
import { File } from "./dto/file.dto";

export const getFiles = async (type?: string): Promise<File[]> => {
  return (await apiInstance.get(`${ApiRoutes.FILES}/?type=${type ?? 'all'}`))?.data;
}

export const createFile = async (formData?: FormData) => {
  return (await apiInstance.post(ApiRoutes.FILES, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }))?.data;
}

export const removeFiles = async (ids: string[]) => {
  return (await apiInstance.delete(`${ApiRoutes.FILES}/?ids=${ids.join(',')}`))?.data;
}