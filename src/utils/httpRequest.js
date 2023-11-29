import axios from 'axios';

const request = axios.create({ baseURL: 'http://localhost:3001/' });

export const get = async (path) => {
    const res = await request.get(path);
    return res.data;
};

export const post = async (path, value) => {
    const res = await request.post(path, value);
    return res.data;
};

export const detail = async (path, id) => {
    const res = await request.get(path, id);
    return res.data;
};

export const put = async (path, id, value) => {
    const res = await request.put(path, id, value);
    return res.data;
};

export const remove = async (path, id) => {
    const res = await request.delete(path, id);
    return res.data;
};

export const pages = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res;
};

export const search = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res;
};
