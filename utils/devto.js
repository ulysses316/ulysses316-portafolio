import moment from "moment"
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from "./markdown"

export const getAllArticles = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/articles");

        if (!response.ok) {
            throw new Error('Error fetching articles:', response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}