// テンプレートで使う日付フォーマット・タグなどの変換ヘルパー関数
import type { Article } from '../types/article';

export function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

export function formatDateTime(isoDate: string): string {
  const d = new Date(isoDate);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getTags(article: Article): string[] {
  const tags: string[] = [];
  article.target_list?.forEach((t) => tags.push(t.target_ref.target_name));
  article.job_type_list?.forEach((j) => tags.push(j.job_type_ref.job_type_name));
  article.department_list?.forEach((d) => tags.push(d.department_ref.department_name));
  article.theme_list?.forEach((t) => tags.push(t.theme_ref.theme_name));
  return tags;
}

// h2タグを抽出して目次を生成し、h2タグにidを付与する関数
export function extractToc(body: string): { toc: { id: string; text: string }[]; body: string } {
  const toc: { id: string; text: string }[] = [];
  let index = 0;

  const updatedBody = body.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_match, attrs, inner) => {
    index++;
    const id = `section${index}`;
    const text = inner.replace(/<[^>]+>/g, '');
    toc.push({ id, text });
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });

  return { toc, body: updatedBody };
}
