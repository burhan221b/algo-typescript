// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'


const reverseString = (str: string): string => {
    return str.split('').reduce((total: string, inc: string): string => inc + total);
}

export default reverseString;