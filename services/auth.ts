import { apiClient } from "@/api/apiClient";


export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupCredentials {
    name: string;
    email: string;
    password: string;
}

export interface SignupResponse {
    name: string;
    email: string;
    password: string;
    id: number;
}

export const loginUser = async (credentials: LoginCredentials): Promise<string> => {
    const response = await apiClient.post<string>('/auth', credentials);
    return response.data;
};

export const signupUser = async (credentials: SignupCredentials): Promise<SignupResponse> => {
    const response = await apiClient.post<SignupResponse>('/users', credentials);
    return response.data;
};



export default { loginUser, signupUser }