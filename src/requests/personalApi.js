import api from "./api"; 

export async function auth() { 
    try {
        const response = await api.post('/auth');
        return response.data;
    } catch (error) {
        console.error('Error retrieving techs:', error);
        return [];
    }
}