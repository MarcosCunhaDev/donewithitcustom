import * as SecureStore from 'expo-secure-store'
import { jwtDecode } from 'jwt-decode'



const authKey = "authToken"

const storeToken = async (authToken: string) => {
    try {
        await SecureStore.setItemAsync(authKey, authToken)
    } catch (error) {
        console.log("Error storing auth token", error)
    }
}

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(authKey)
        return authToken
    } catch (error) {
        console.log("Error getting auth token", error)
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(authKey)
    } catch (error) {
        console.log('Error removing auth token', error)
    }
}

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;

};

export default { storeToken, getToken, removeToken, getUser }