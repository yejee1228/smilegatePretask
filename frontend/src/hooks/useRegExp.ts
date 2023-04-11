export const phoneRegExp = /^[0-9]+$/;

export const userNameRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;

export const checkRegExp = (text: string, regExp: RegExp) => {
    return regExp.test(text);
}