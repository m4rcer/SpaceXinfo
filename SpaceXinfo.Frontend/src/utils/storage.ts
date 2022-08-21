export const getIsAuth = ():boolean => {
    const isAuth = sessionStorage.getItem('isAuth');
    return JSON.parse(isAuth ? isAuth : "false");
}

export const setIsAuth = (isAuth:boolean) => {
    sessionStorage.setItem('isAuth', JSON.stringify(isAuth));
}