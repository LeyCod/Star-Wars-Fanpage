import URL from "./index.js"
const url = `${URL}people`;

export const getPeople = () => {
    return fetch(url)
};

