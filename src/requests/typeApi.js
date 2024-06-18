import api from "./api"; 

export async function getTypes() { 
    try {
        const response = await api.get('/types');
        return response.data;
    } catch (error) {
        console.error('Error retrieving projects:', error);
        return [];
    }
}

export async function postType(data,config) { 
    await api.post('/types',data,config);
}