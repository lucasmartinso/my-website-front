import api from "./api"; 

export async function getProjects() { 
    try {
        const response = await api.get('/projects');
        return response.data;
    } catch (error) {
        console.error('Error retrieving projects:', error);
        return [];
    }
}

export async function getPinnedProjects() { 
    try {
        const response = await api.get('/projects/pinned');
        return response.data;
    } catch (error) {
        console.error('Error retrieving projects:', error);
        return [];
    }
}