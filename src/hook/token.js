export function GetToken(){
    const user= sessionStorage.getItem("user");
    if (user) {
        return `Bearer ${JSON.parse(user).token}`;
    }

    return null;
};