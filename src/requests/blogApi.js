import api from "./api"; 

export async function getBlogs() { 
    try {
        const response = await api.get('/blogs');
        return response.data;
    } catch (error) {
        console.error('Error retrieving blogs:', error);
        return [];
    }
}