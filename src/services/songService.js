import * as httpRequest from '../utils/httpRequest';

export const post = async (value) => {
    try {
        const res = await httpRequest.post('songs', value);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const detail = async (id) => {
    try {
        const res = await httpRequest.detail(`songs/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const put = async (id, value) => {
    try {
        const res = await httpRequest.put(`songs/${id}`, value);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// export const pages = async (page, perPage) => {
//     try {
//         const res = await httpRequest.pages('books', {
//             params: {
//                 _page: page,
//                 _limit: perPage,
//             },
//         });
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const search = async (title) => {
    try {
        const res = await httpRequest.search('songs', {
            params: {
                title_like: title,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
