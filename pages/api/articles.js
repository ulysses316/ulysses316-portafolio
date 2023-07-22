// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const url = "https://dev.to/api/articles/me";
const apiKey = process.env.DEVTO_APIKEY;
const headers = { "api-key": apiKey }

export default async function handler(req, res) {
    try {
        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error('Error fetching articles:', response.statusText);
        }

        const data = await response.json();
        res.status(200).json({ data: data })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}
