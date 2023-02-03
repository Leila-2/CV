const onlySymbolsPattern = /^[^a-zA-Z0-9]+$/;
const onlyLettersPattern = /^[a-zA-Z]+$/
const onlyDigitsPattern = /^\d+$/
const LettersDigitsPattern = /^[A-Za-z0-9]*$/
const containsLettersPattern = /[a-zA-Z]/
const containsDigitsPattern = /\d/

export const checkPassword = (password) => {
    if (password.length < 8) {
        return {
            progress: 0,
            color: "#e9ecef"
        }
    }
    else if (isPasswordEasy(password)) {
        return {
            progress: 33,
            color: '#f44336'
        }
    }
    else if (isPasswordMedium(password)) {
        return {
            progress: 70,
            color: '#ffa726'
        }
    }
    else {
        return {
            progress: 100,
            color: '#66bb6a'
        }
    }
}

const isPasswordEasy = (password) => {
    return onlySymbolsPattern.test(password) || onlyLettersPattern.test(password) || onlyDigitsPattern.test(password)
}

const isPasswordMedium = (password) => {
    return LettersDigitsPattern.test(password) || !containsLettersPattern.test(password) || !containsDigitsPattern.test(password)
}