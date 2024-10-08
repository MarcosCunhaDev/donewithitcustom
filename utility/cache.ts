import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 5;

const checkIfExpired = (item: any) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    const isExpired = now.diff(storedTime, 'minutes') > expiryInMinutes;

    return isExpired;
};

const store = async (key: string, value: string) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        };

        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
};
const retrieve = async (key: string) => {
    try {
        const result = await AsyncStorage.getItem(prefix + key);
        if (!result) return
        const item = JSON.parse(result);
        if (!item) return null;
        const isExpired = checkIfExpired(item);
        if (isExpired) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        return item.value;
    } catch (error) {
        console.log(error);
    }
};

export default {
    store,
    retrieve,
};
