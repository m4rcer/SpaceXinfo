export const getIsAuth = ():boolean => {
    const isAuth = localStorage.getItem('isAuth');
    return JSON.parse(isAuth ? isAuth : "");
}

export const setIsAuth = (isAuth:boolean) => {
    localStorage.setItem('isAuth', JSON.stringify(isAuth));
}