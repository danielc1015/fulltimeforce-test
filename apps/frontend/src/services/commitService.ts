import axios from "axios";
import { api } from "../utils/api";

export const searchCommits = async () => {
    try {
        const commitsResponse = await axios.get(`${api.baseUrl}/commits`);
        return commitsResponse.data;
    } catch (e) {
        throw new Error('Error searching commits')
    }
}
