function CheckUserToken() {
    if (typeof window !== "undefined") {
        const user = sessionStorage.getItem("user");
        
        if (user) {
            const parsedUser = JSON.parse(user);
            return parsedUser.token !== undefined;
        }
    }
    return false;
}

export { CheckUserToken };