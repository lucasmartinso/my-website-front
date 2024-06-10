import api from "./api"; 

export async function auth(personalData) { 
    try {
        const response = await api.post('/auth', personalData);
        return response.data;
    } catch (error) {
        console.error('Error retrieving techs:', error);
        return [];
    }
}

export async function verifyAuth(token) { 
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const response = await api.post('/verify/auth', null, token);
        return response.data;
    } catch (error) {
        console.error('Error retrieving techs:', error);
        return [];
    }
}