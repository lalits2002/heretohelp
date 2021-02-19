import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, val) => {
    try {
        await AsyncStorage.setItem(key, val)
    } catch (error) {
        // Error Saving
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (error) {
        // Error Getting data
    }
}
