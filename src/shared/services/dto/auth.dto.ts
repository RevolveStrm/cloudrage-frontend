import { LoginData, RegistrationData } from "@/shared/constants/auth.schema";

export type LoginDto = LoginData;

export type LoginResponseDto = {
  token: string;
}

export type RegisterDto = RegistrationData;

export type RegisterResponseDto = LoginResponseDto;

