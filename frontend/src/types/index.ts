interface IUser {
    userName: string,
    userPhone: string,
    couponCode: string | null
}
interface IUserForList {
    couponSeq: string,
    userName: string,
    userPhone: string,
    couponCode: string,
    instDate: string
}

export type { IUser, IUserForList }