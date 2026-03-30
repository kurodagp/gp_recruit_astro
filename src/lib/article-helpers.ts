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
