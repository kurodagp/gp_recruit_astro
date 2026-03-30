import type { Article, ArticlesResponse } from '../types/article';

const API_BASE = 'https://cms-api.nilto.com/v1';
const API_KEY = import.meta.env.NILTO_API_KEY;

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch(
    `${API_BASE}/contents/?model=article&order=-published_at`,
    {
      headers: { 'X-NILTO-API-KEY': API_KEY },
    }
  );

  if (!res.ok) {
    throw new Error(`Nilto API error: ${res.status} ${res.statusText}`);
  }

  const json: ArticlesResponse = await res.json();
  return json.data;
}
