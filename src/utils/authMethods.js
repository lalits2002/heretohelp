import { Alert } from 'react-native';
import firebase from "firebase";
import * as Google from 'expo-google-app-auth';
import store_redux_thunk from '../asyncStorage/store';
import { EMAIL_PASSWORD_AUTH, HOME } from '../asyncStorage/actionsList';

export const signInWithGoogle = async () => {

}

export const signInWithFacebook = async () => {

}

export const signIn = async ({ email, password }) => {
    try {
        const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
        const user = resp.user
        store_redux_thunk.dispatch((dispatch) => {
            dispatch({
                type: HOME,
                token: user,
                authType: EMAIL_PASSWORD_AUTH,
            });
        });
    } catch (error) {
        let errorMessage = "There was problem signing you in!"

        if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid Email provided!"
        }
        if (error.code === "auth/wrong-password") {
            errorMessage = "Check your email or password!"
        }
        if (error.code === "auth/user-not-found") {
            errorMessage = "You are not a registered user!"
        }
        throw errorMessage
    }
}
