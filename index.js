import axios from 'axios';

export const handler = async (event) => {
    const raw = axios.get("https://c55bf3ed7453.ngrok-free.app");
    const response = {
        statusCode: 200,
        body: JSON.stringify(raw.data),
    };
    return response;
//
};
