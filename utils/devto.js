import moment from "moment"
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from "./markdown"

const url = "https://dev.to/api/articles/me";
const apiKey = "process.env.DEVTO_APIKEY";
const headers = { "api-key": apiKey }

const getAllArticles = async () => {
    try {
        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error('Error fetching articles:', response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}