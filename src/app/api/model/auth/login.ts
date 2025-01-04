export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    username: string;
    role: string;
  };
}
