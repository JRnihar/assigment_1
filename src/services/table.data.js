import axios from "axios";


export const getAllData = async () => {
    try {
        const response = await axios.get(`./data.json`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};