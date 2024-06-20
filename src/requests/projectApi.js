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

export async function getProjectsPerType(type) { 
    try {
        const response = await api.get(`/projects?type=${type}`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving projects:', error);
        return [];
    }
}

export async function getProjectComplete(id) { 
    try {
        const response = await api.get(`/projects/${id}`); 
        return response.data;
    } catch (error) {
        console.error('Error retrieving projects:', error);
        return [];
    }
}

export async function deleteProject(id,config) { 
    try {
        await api.delete(`/delete/projects/${id}`,config);
    } catch (error) {
        console.error('Error deleting project:', error);
    }
}

export async function updateProject(id,projectData,config) { 
    await api.put(`/edit/projects/${id}`,projectData,config);
}

export async function postProject(projectData,config) { 
    await api.post(`/projects`,projectData,config);
}