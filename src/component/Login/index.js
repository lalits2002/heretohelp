import React, { useState } from 'react'
import { Text, View, Image, Platform } from 'react-native'
import WithAuthScreen from '../../OnBoard/WithAuthScreen'
import styles from '../../OnBoard/SignupStyles'
import { LOGIN_FIELDS } from './constants'
import InputField from '../InputField/InputField'
import { FacebookAuthButton, GoogleAuthButton, FacebookSmallAuthButton, GoogleSmallAuthButton } from '../AuthButtons'
import { signIn } from '../../utils/authMethods'
import { fieldsNotEmpty } from '../../utils/helpers'
import { _setPlaceHolderColor } from '../../OnBoard/methods'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIGNUP_SCREEN1 } from '../../navigation/screenNames'
import store from '../../asyncStorage/store'
import { SIGN_UP } from '../../asyncStorage/actionsList'
import Colors from '../../Items/Colors'

const HorizontalORLine = () => (
    <View style={styles.divider_container}>
        <View style={styles.divider}></View>
        <View style={{ width: '20%' }}><Text style={{ fontFamily: 'Lato-Regular', fontSize: 13, color: '#C8C8C8', alignSelf: 'center', }}>OR</Text></View>
        <View style={styles.divider}></View>
    </View>
)

const ForgotPassword = () => (
    <TouchableOpacity>
        <View style={{
            marginTop: Platform.OS === "ios" ? 18 : 0,
            marginBottom: Platform.OS === "ios" ? 24 : 20
        }}>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: "#596188", alignSelf: 'center', textDecorationLine: "underline" }}>Forgot Password</Text>
        </View>
    </TouchableOpacity>
)

const WideRoundedButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{
            borderColor: Colors.primary2,
            borderWidth: 2,
            paddingVertical: 15,
            alignItems: "center",
            borderRadius: 30
        }}>
            <Text style={{ fontSize: 16, color: Colors.primary2 }}>{title}</Text>
        </View>
    </TouchableOpacity>
)

const renderFormFields = (objectMap, errorField, errorMessage=null) => {
    const emptyErrorMessage = errorMessage || "*This field is required"
    return LOGIN_FIELDS.map((field, index) => {
        return (
            <View style={styles.field_group} key={index}>
                <InputField
                    label={field.label}
                    secureTextEntry={field.type === "secure"}
                    placeholder={field.placeholder}
                    onChangeText={objectMap[field.name]}
                    error={errorField === field.name && emptyErrorMessage}
                    placeholderTextColor={_setPlaceHolderColor(field.name, errorField)}
                />
            </View>
        )
    })
}

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorField, setErrorField] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loader, setLoader] = useState(false)

    const stateMapping = {
        "email": setEmail,
        "password": setPassword
    }

    const handleSignIn = async () => {
        // Make sure none of the fields are empty
        const authCredentials = { email: email.toLowerCase().trim(), password }
        const errorFieldCallback = (key) => { setErrorField(key) }
        if (!fieldsNotEmpty(authCredentials, errorFieldCallback)) { return false }

        setLoader(true)
        try {
            await signIn(authCredentials)
            setLoader(false)
        } catch (error) {
            setErrorField("email")
            setErrorMessage(error)
            setLoader(false)
        }
    }

    const segueToSignup = () => {
        store.dispatch({ type: SIGN_UP })
    }

    return (
        <WithAuthScreen title="Welcome Back!" onNextButtonPress={handleSignIn} nextButtonLoader={loader} screen="login" style={props.style}>
            <View style={styles.content}>
                {renderFormFields(stateMapping, errorField, errorMessage )}
                <ForgotPassword />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%"
                }}>
                    <GoogleSmallAuthButton />
                    <FacebookSmallAuthButton />
                </View>
                <View style={{ height: 15 }} />
                <WideRoundedButton title="Create a new account" onPress={segueToSignup} />
            </View>
        </WithAuthScreen>
    )
}

export default Login
