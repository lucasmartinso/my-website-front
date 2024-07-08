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
    console.log(id);
    try {
        const response = await api.get(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving complete blog:', error);
        return [{id:-1,tittle:"ERROR",description:"ERROR",text:"ERROR"}];
    }
}

export async function postBlog(blogData, config) { 
    await api.post(`/blogs`,blogData,config);
}

export async function updateBlog(id, blogData, config) { 
    await api.put(`/edit/blogs/${id}`,blogData,config);
}

export async function deleteBlog(id, config) { 
    await api.delete(`/delete/blogs/${id}`,config);
}