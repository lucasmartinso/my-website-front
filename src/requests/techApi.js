import api from "./api"; 

export async function getTechs() { 
    const promise = await api.get("/techs");

    return promise.data;
}