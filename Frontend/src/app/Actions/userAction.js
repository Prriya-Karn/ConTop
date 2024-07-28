export const setUserRole = (role)=>{
    return {
        type:"SET_USER_ROLE",
        payload:role
    }
}
export const setUserRoleNull = ()=>{
    return {
        type:"SET_USER_ROLE_NULL"
    }
}