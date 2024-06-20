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
    try {
        const response = await api.post('/techs/search',tech);
        return response.data;
    } catch (error) {
        console.log('Error retrieving techs:', error); 
        return [];
    }
}

export async function deleteTech(id,config) {
    try {
        await api.delete(`/delete/techs/${id}`,config);
    } catch (error) {
        console.log('Error deleting techs:', error); 
    }
}

export async function updateTech(id,techData,config) {
    try {
        await api.put(`/edit/techs/${id}`,techData,config);
    } catch (error) {
        console.log('Error updating techs:', error); 
    }
}

export async function postTech(techData,config) {
    try {
        await api.post(`/techs`,techData,config);
    } catch (error) {
        console.log('Error posting techs:', error); 
    }
}