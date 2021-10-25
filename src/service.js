import axios from 'axios'

export const getWords = async (data) => {
    return await axios.post("https://localhost:44377/api/word/info", data);
}