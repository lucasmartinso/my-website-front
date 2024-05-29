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

export async function searchTechs(tech) {
    console.log(tech); 
    try {
        const response = await api.post('/techs/search',tech);
        return response.data;
    } catch (error) {
        console.log('Error retrieving techs:', error); 
        return [];
    }
}