import axios from "axios"
import moment from "moment"
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from "./markdown"

const username = "ulysses316"
const blogURL = "https://www.ulysses316.com/blog/"

const featuredBlogSlug =
  "i-completely-rewrote-my-personal-website-using-dev-to-as-a-cms-2pje"
const featuredPortfolioSlugs = [
  "ameira-me-5a55",
  "wallis-family-mediation-previously-wallis-consultancy-2okf"
]

// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = canonical => {
  if (canonical.startsWith(portfolioURL)) {
    return canonical.replace(portfolioURL, "")
  }
  return canonical.replace(blogURL, "")
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const convertDevtoResponseToArticle = data => {
  const slug = convertCanonicalURLToRelative(data.canonical_url)
  const markdown = sanitizeDevToMarkdown(data.body_markdown)
  const html = convertMarkdownToHtml(markdown)

  const article = {
    id: data.id,
    title: data.title,
    description: data.description,
    publishedAt: data.published_at,
    devToSlug: data.slug,
    devToPath: data.path,
    devToURL: data.url,
    commentsCount: data.comments_count,
    publicReactionsCount: data.public_reactions_count,
    positiveReactionsCount: data.positive_reactions_count,
    coverImage: data.cover_image,
    tags: data.tag_list,
    canonical: data.canonical_url,
    collectionId: data.collection_id || -1,
    slug,
    markdown,
    html
  }
  return article
}

const blogFilter = article => article.canonical.startsWith(blogURL)

const portfolioFilter = article => article.canonical.startsWith(portfolioURL)

// Get all users articles from Dev.to and filter by ones with a canonical URL to your blog
export const getAllArticles = async () => {
  const params = { username, per_page: 1000 }
  const headers = { "api-key": process.env.DEVTO_APIKEY }
  const { data } = await axios.get(`https://dev.to/api/articles/me`, {
    params,
    headers
  })
  const articles = data.map(convertDevtoResponseToArticle)
  return articles
}

export const getAllBlogArticles = async () => {
  const articles = await getAllArticles()
  return articles.filter(blogFilter)
}

export const getAllPortfolioArticles = async () => {
  const articles = await getAllArticles()
  return articles.filter(portfolioFilter)
}

export const getHomePageArticles = async () => {
  const articles = await getAllArticles()
  const [latestBlog] = articles.filter(blogFilter)
  const [latestPortfolio] = articles.filter(portfolioFilter)

  const featuredBlog =
    articles.find(({ devToSlug }) => devToSlug === featuredBlogSlug) || null
  const featuredPortfolio = articles
    .filter(({ devToSlug }) => featuredPortfolioSlugs.includes(devToSlug))
    .sort((a1, a2) =>
      moment(a1.publishedAt).isBefore(a2.publishedAt) ? 1 : -1
    )

  return {
    latestBlog,
    latestPortfolio,
    featuredBlog,
    featuredPortfolio
  }
}

// Gets an article from Dev.to using the ID that was saved to the cache earlier
export const getArticleFromCache = (cache, slug) => {
  const article = cache.find(cachedArticle => cachedArticle.slug === slug)
  return article
}
