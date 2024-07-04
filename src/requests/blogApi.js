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

export async function getRandomBlogs() { 
    try {
        const response = await api.get('/blogs/random');
        return response.data;
    } catch (error) {
        console.error('Error retrieving random blogs:', error);
        return [];
    }
}

export async function getCompleteBlog(id) { 
    try {
        const response = await api.get(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving complete blog:', error);
        return [];
    }
}

export async function postBlog(blogData, config) { 
    await api.post(`/blogs`,blogData,config);
}