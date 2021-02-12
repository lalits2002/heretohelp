const SPECIAL_CHARACTERS = /[`~!@#$%^&*()_+\-=\\,./<>?|[\]{};':"]/;
const PASSWORD_MIN_LENGTH = 8;
const inValidPasswordMessage = 'password must contain the following:\n' +
    ` - at least ${PASSWORD_MIN_LENGTH} characters\n` +
    ' - a lower-case letter\n' +
    ' - an upper-case letter\n' +
    ' - a digit; ie.(0-9)\n' +
    ' - a special character; ie.(!, @, #, etc)'

const fieldsNotEmpty = (fields, errorFieldCallback) => {
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
        password.match(/[0-9]/) &&
        password.match(SPECIAL_CHARACTERS)
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
