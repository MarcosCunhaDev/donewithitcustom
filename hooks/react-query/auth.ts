import { useAuthContext } from '@/auth/context';
import { LoginCredentials, SignupResponse, SignupCredentials } from '@/services/auth';
import AuthService from '@/services/auth';
import { useMutation } from "@tanstack/react-query";


export const useLogin = () => {
    const { logInUser } = useAuthContext()

    return useMutation<string, Error, LoginCredentials>({
        mutationKey: ['useLogin'],
        mutationFn: AuthService.loginUser,
        onSuccess: (data) => {
            logInUser(data);
        },
        onError: (error) => {
            console.error('Error during login:', error.message);
        },
    })
}

export const useRegisterUser = () => {
    const { mutate: login } = useLogin()

    return useMutation<SignupResponse, Error, SignupCredentials>({
        mutationKey: ['useRegisterUser'],
        mutationFn: AuthService.signupUser,
        onSuccess: async (data) => {
            await login({ email: data?.email, password: data.password })
        },
        onError: (error) => {
            console.error('Error during signup:', error.message);
        },
    })
}