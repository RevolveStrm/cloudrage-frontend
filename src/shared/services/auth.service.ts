import apiInstance from "./api-instance";
import { ApiRoutes } from "./api-routes";
import { LoginDto, LoginResponseDto, RegisterDto, RegisterResponseDto } from "./dto/auth.dto";

export const login = async (values: LoginDto): Promise<LoginResponseDto> => {
  return (await apiInstance.post(ApiRoutes.AUTH_LOGIN, values))?.data;
}

export const register = async (values: RegisterDto): Promise<RegisterResponseDto> => {
  return (await apiInstance.post(ApiRoutes.AUTH_REGISTER, values))?.data;
}