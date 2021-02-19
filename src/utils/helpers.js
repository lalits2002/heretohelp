import {
    SPECIAL_CHARACTERS,
    PASSWORD_MIN_LENGTH,
    inValidPasswordMessage
} from './constants'

const funcDefault = (value) => {}

export const fieldsNotEmpty = (fields, errorFieldCallback=funcDefault) => {
    for (const key in fields) {
        if (fields[key].length === 0) {
            errorFieldCallback(key)
            return false;
        }
    }
    return true
}

const isEmailValid = (email) => {
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        return false
    }
    return true
}

const isPasswordValid = (password) => {
    if (!(
        password.length >= PASSWORD_MIN_LENGTH &&
        password.match(/[a-z]/) &&
        password.match(/[A-Z]/) &&
        password.match(/[0-9]/)
    )) {
        return false
    }
    return true
}

export const isAuthFieldsValid = (fields, errorFieldCallback, errorFieldMessageCallback) => {
    if (!fieldsNotEmpty(fields, errorFieldCallback)) {
        const errorMessage = `*This field can't be empty`
        errorFieldMessageCallback(errorMessage)
        return false
    }
    if (fields.email && !isEmailValid(fields.email)) {
        const errorMessage = "*Email is invalid"
        errorFieldCallback("email")
        errorFieldMessageCallback(errorMessage)
        return false
    }
    if (fields.password) {
        if (!isPasswordValid(fields.password)) {
            errorFieldCallback("password")
            errorFieldMessageCallback(inValidPasswordMessage)
            return false
        }

        if (fields.password !== fields.vPassword) {
            const errorMessage = '*Passwords do not match. Please try again.'
            errorFieldCallback("vPassword")
            errorFieldMessageCallback(errorMessage)
            return false
        }
    }
    return true
}
