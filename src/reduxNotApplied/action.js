import {
    USERREWARD,
    CURRENTUSER,
    USERTRANSACTION,
    USERS,
    NEWTRANSACTION,
    LOADEDDATA
} from "./actionTypes";

export function userRewardAction() {
    return {
        type: USERREWARD,
    };
}
export function currenUserAction() {
    return {
        type: CURRENTUSER,
    };
}
export function userTransactionAction() {
    return {
        type: USERTRANSACTION,
    };
}
export function usersAction() {
    return {
        type: USERS,
    };
}
export function newTransactionAction() {
    return {
        type: NEWTRANSACTION,
    };
}
export function loadedDataAction() {
    return {
        type: LOADEDDATA,
    };
}