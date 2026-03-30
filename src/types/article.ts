export interface NiltoRef {
  _id: number;
  _model: string;
  _status: string;
  _title: string;
  _created_at: string;
  _updated_at: string;
  _published_at: string;
  _last_published_at: string;
}

export interface Category extends NiltoRef {
  category_name: string;
}

export interface JobType extends NiltoRef {
  job_type_name: string;
}

export interface Department extends NiltoRef {
  department_name: string;
}

export interface Target extends NiltoRef {
  target_name: string;
}

export interface Theme extends NiltoRef {
  theme_name: string;
}

export interface Staff extends NiltoRef {
  staff_name: string;
  staff_title: string;
  department: number;
  job_type: number;
  staff_image: NiltoMedia;
  staff_profile: string;
}

export interface NiltoMedia {
  url: string;
  alt: string;
}

export interface Article {
  _id: number;
  _model: string;
  _status: string;
  _title: string;
  _created_at: string;
  _updated_at: string;
  _published_at: string;
  _last_published_at: string;
  title: string;
  slug: string;
  category: Category;
  job_type_list: Array<{ job_type_ref: JobType }>;
  department_list: Array<{ department_ref: Department }>;
  target_list: Array<{ target_ref: Target }>;
  theme_list: Array<{ theme_ref: Theme }>;
  published_at: string;
  main_visual?: NiltoMedia;
  ogp_image?: NiltoMedia;
  lead?: string;
  body?: string;
  meta_description?: string;
  highlight_copy?: string;
  staff_list?: Array<{ staff_ref: Staff }>;
  related_articles_list?: Array<{ related_article_ref: Article }>;
}

export interface ArticlesResponse {
  total: number;
  limit: number;
  offset: number;
  data: Article[];
}
