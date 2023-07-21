import moment from "moment"
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from "./markdown"
import useFetch from "@/hooks/useFetch";

export const markdownToHtml = async (slug) => {
    try {
        const response = await fetch(`https://dev.to/api/articles/ulysses316/${slug}`);

        if (!response.ok) {
            throw new Error('Error fetching articles:', response.statusText);
        }
        const data = await response.json();
        const markdown = sanitizeDevToMarkdown(data.body_markdown)
        const html = convertMarkdownToHtml(markdown)
        return {
            html: html,
            title: data.title,
            description: data.description,
            url: data.url,
            date: data.published_timestamp,
            cover: data.cover_image
        }
        
    } catch (error) {
        console.log(error);
    }
}