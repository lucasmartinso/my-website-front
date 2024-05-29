import api from "./api"; 

export async function getTechs() { 
    try {
        const response = await api.get('/techs');
        return response.data;
    } catch (error) {
        console.error('Error retrieving techs:', error);
        return [];
    }
}

export async function searchTechs() { 
    try {
        const response = await api.get('/techs/search');
        return response.data;
    } catch (error) {
        console.log('Error retrieving techs:', error); 
        return [];
    }
}