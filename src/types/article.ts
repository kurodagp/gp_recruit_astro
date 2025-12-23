export interface Article {
  id: number;
  href: string;
  imageSrc: string;
  imageSrcSet?: string;
  category: {
    alphabet: string;
    label: string;
  };
  date: string;
  dateTime: string;
  title: string;
  tags: string[];
  copy?: string;
}

// 将来的にCMSから取得する場合のインターフェース
export interface ArticleResponse {
  articles: Article[];
  total: number;
  page?: number;
  perPage?: number;
}
