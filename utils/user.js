function GetUserData() {
    if (typeof window !== "undefined") {
        const user = sessionStorage.getItem("user");
        
        if (user) {
            const parsedUser = JSON.parse(user);
            if(parsedUser.user !== undefined){
                return parsedUser.user
            }
        }
    }
    return null;
}

export { GetUserData };