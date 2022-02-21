import URL from "./index.js"
const url = `${URL}planets`;

export const getPlanets = () => {
    return fetch(url)
};
