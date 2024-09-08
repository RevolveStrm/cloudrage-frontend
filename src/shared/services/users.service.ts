import apiInstance from "./api-instance";
import { ApiRoutes } from "./api-routes";

export const getMe = async () => {
  return (await apiInstance.get(ApiRoutes.USERS_ME))?.data;
}