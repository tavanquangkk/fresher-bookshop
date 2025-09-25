import axios from "../utils/axios-customize";

const registerAPI = async (fullName, email, password, phone) => {
    const res = await axios.post("/api/v1/user/register", {
        fullName,
        email,
        password,
        phone,
    });
    return res;
};

const loginAPI = async (username, password) => {
    const res = await axios.post("/api/v1/auth/login", {
        username,
        password,
    });
    return res;
};

const fetchAccount = async () => {
    return await axios.get("/api/v1/auth/account");
};

export { registerAPI, loginAPI, fetchAccount };
